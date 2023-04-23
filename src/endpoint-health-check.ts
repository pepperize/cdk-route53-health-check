import { Annotations, Tags } from "aws-cdk-lib";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
import * as route53 from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";
import { HealthCheckBase, HealthCheckOptions } from "./health-check";
import { HealthCheckType } from "./health-check-type";

export interface EndpointHealthCheckProps extends HealthCheckOptions {
  /**
   * The domain name that Route53 performs health checks on. Route53 resolves the IP address and performs the lookup.
   *
   * If IP address is given, it's used as the host name.
   *
   * <b>Either DomainName or IpAddress must be specified</b>
   */
  readonly domainName?: string;
  /**
   * The ip address that Route53 performs health checks on. Optionally a domain name may be given.
   *
   * <b>An IP address must be specified if protocol TCP</b>
   */
  readonly ipAddress?: string;
  /**
   * The protocol that Route53 uses to communicate with the endpoint.
   *
   * <b>An IP address must be specified if protocol TCP</b>
   *
   * @default HTTPS
   */
  readonly protocol?: Protocol;
  /**
   * The port that Route53 performs health checks. The port must be between 1 and 65535.
   *
   * @default 80 for HTTP; 443 for HTTPS
   */
  readonly port?: number;
  /**
   * Specify that Route53 sends the host name for TLS negotiation.
   *
   * @default true for HTTPS
   */
  readonly enableSni?: boolean;
  /**
   * The path for HTTP or HTTPS health checks. Provide a string between 1 and 255 length.
   */
  readonly resourcePath?: string;
  /**
   * The search string for HTTP or HTTPS health checks. Route53 will search in the response body. Provide a string between 1 and 255 length.
   */
  readonly searchString?: string;

  /**
   * The number of seconds between the time that Route53 gets a response from your endpoint and the time that it sends the next health check request. Each Route53 health checker makes requests at this interval. Provide a number between 10 and 30.
   *
   * <i>If you choose an interval of 10 and there are 15 health checkers, the endpoint will receive approximately 1 request per second.</i>
   *
   * <b>Can't be changed after HealthCheck is deployed</b>
   */
  readonly requestInterval?: number;
  /**
   * The number of consecutive health checks that an endpoint must pass or fail for Route53 to change the current status of the endpoint between healthy and unhealthy. Provide a number between 1 and 10.
   */
  readonly failureThreshold?: number;
  /**
   * Whether Route53 measures the latency between health checkers in multiple AWS regions and your endpoint, and displays a CloudWatch latency graphs in the Route53 console.
   *
   * <b>Can't be changed after HealthCheck is deployed</b>
   */
  readonly latencyGraphs?: boolean;
  /**
   * The list of regions from which Route53 health checkers check the endpoint.
   *
   * <b>If omitted Route53 performs checks from all health checker regions.</b>
   */
  readonly regions?: HealthCheckerRegions[];
}

/**
 * Create a Route53 HealthCheck that monitors an endpoint either by domain name or by IP address.
 *
 * <b>Example</b>
 * ```typescript
 * new EndpointHealthCheck(stack, "HealthCheck", {
 *   domainName: "pepperize.com",
 * });
 * ```
 * Generates
 * ```yaml
 * Resources:
 *   Type: AWS::Route53::HealthCheck
 *   Properties:
 *     HealthCheckConfig:
 *       FullyQualifiedDomainName: "pepperize.com"
 *       Port: 443
 *       Type: "HTTPS"
 *       EnableSNI: true
 * ```
 * @link https://docs.aws.amazon.com/de_de/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#aws-resource-route53-healthcheck-properties
 *
 * @resource AWS::Route53::HealthCheck
 */
export class EndpointHealthCheck extends HealthCheckBase {
  public readonly healthCheckId: string;

  constructor(scope: Construct, id: string, props: EndpointHealthCheckProps) {
    super(scope, id);

    const protocol = props.protocol || Protocol.HTTPS;
    const type = this.healthCheckType(protocol, props.searchString);
    const port = this.defaultPort(props.port, type);
    const enableSni = this.enableSniForHttps(type, props.enableSni);

    if (!props.domainName && !props.ipAddress) {
      Annotations.of(this).addError("Either DomainName or IpAddress has to be specified");
    }

    if (props.ipAddress && !new RegExp(IP_ADDRESS_REGEX_PATTERN).test(props.ipAddress)) {
      Annotations.of(this).addError("IpAddress must be valid");
    }

    if (undefined != props.port && (props.port < 1 || props.port > 65535)) {
      Annotations.of(this).addError("Port has to be between 1 and 65535");
    }

    if (props.resourcePath && props.resourcePath.length > 255) {
      Annotations.of(this).addError("ResourcePath must be at least 255 character long");
    }

    if (props.searchString && props.searchString.length > 255) {
      Annotations.of(this).addError("SearchString must be at least 255 character long");
    }

    if (undefined != props.failureThreshold && (props.failureThreshold < 1 || props.failureThreshold > 10)) {
      Annotations.of(this).addError("FailureThreshold has to be between 10 and 30");
    }

    if (undefined != props.requestInterval && (props.requestInterval < 10 || props.requestInterval > 30)) {
      Annotations.of(this).addError("RequestInterval has to be between 10 and 30");
    }

    if (props.regions && props.regions.length < 3) {
      Annotations.of(this).addError("At least three HealthCheckerRegions have to be given");
    }

    const resource = new route53.CfnHealthCheck(this, "Resource", {
      healthCheckConfig: {
        enableSni: enableSni,
        fullyQualifiedDomainName: props.domainName,
        ipAddress: props.ipAddress,
        inverted: props.inverted,
        port: port,
        resourcePath: props.resourcePath,
        searchString: props.searchString,
        type: type,

        requestInterval: props.requestInterval,
        failureThreshold: props.failureThreshold,
        measureLatency: props.latencyGraphs,
        regions: props.regions,
      },
      healthCheckTags: this.tags.renderedTags,
    });

    this.healthCheckId = resource.attrHealthCheckId;

    const healthCheckName = props.healthCheckName || props.domainName;
    if (healthCheckName) {
      Tags.of(this).add("Name", healthCheckName);
    }
  }

  /**
   * Returns the CFN HealthCheckType for the given protocol. If undefined returns default HTTPS.
   */
  private healthCheckType(protocol?: Protocol, searchString?: string): HealthCheckType {
    switch (true) {
      case Protocol.TCP == protocol:
        return HealthCheckType.TCP;
      case Protocol.HTTPS == protocol && !!searchString:
        return HealthCheckType.HTTPS_STR_MATCH;
      case Protocol.HTTPS == protocol:
        return HealthCheckType.HTTPS;
      case Protocol.HTTP == protocol && !!searchString:
        return HealthCheckType.HTTP_STR_MATCH;
      case Protocol.HTTP == protocol:
        return HealthCheckType.HTTP;
      default:
        return HealthCheckType.HTTPS;
    }
  }

  /**
   * Sets the default if undefined for HTTP and HTTPS
   */
  private defaultPort(port?: number, type?: HealthCheckType): number | undefined {
    switch (true) {
      case port && port > 1:
        return port;
      case HealthCheckType.HTTPS == type:
        return 443;
      case HealthCheckType.HTTPS_STR_MATCH == type:
        return 443;
      case HealthCheckType.HTTP == type:
        return 80;
      case HealthCheckType.HTTP_STR_MATCH == type:
        return 80;
      default:
        return undefined;
    }
  }

  /**
   * Enables SNI by default for HTTPS if omitted, otherwise undefined
   */
  private enableSniForHttps(type?: HealthCheckType, enableSni?: boolean): boolean | undefined {
    if (HealthCheckType.HTTPS != type && HealthCheckType.HTTPS_STR_MATCH != type) {
      return undefined;
    }
    if (undefined == enableSni) {
      return true;
    }

    return enableSni;
  }

  /**
   * The percentage of Route53 health checkers that report that the status of the health check is healthy
   *
   * <b>LatencyGraphs has to be enabled</b>
   *
   * Valid statistics: Average (recommended), Minimum, Maximum
   */
  public metricHealthCheckPercentageHealthy(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.metric("HealthCheckPercentageHealthy", { statistic: cloudwatch.Statistic.AVERAGE, ...props });
  }

  /**
   * The time in milliseconds that it took Route53 health checkers to establish a TCP connection with the endpoint
   *
   * Valid statistics: Average (recommended), Minimum, Maximum
   */
  public metricConnectionTime(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.metric("ConnectionTime", { statistic: cloudwatch.Statistic.AVERAGE, ...props });
  }

  /**
   * The time in milliseconds that it took Route53 health checkers to complete the SSL/TLS handshake
   *
   * Valid statistics: Average, Minimum, Maximum
   */
  public metricSSLHandshakeTime(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.metric("SSLHandshakeTime", { statistic: cloudwatch.Statistic.AVERAGE, ...props });
  }

  /**
   * The time in milliseconds that it took Route53 health checkers to receive the first byte of the response to an HTTP or HTTPS request
   *
   * Valid statistics: Average (recommended), Minimum, Maximum
   */
  public metricTimeToFirstByte(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.metric("TimeToFirstByte", { statistic: cloudwatch.Statistic.AVERAGE, ...props });
  }
}

/**
 * The protocol that Route53 uses to communicate with the endpoint.
 */
export enum Protocol {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  TCP = "TCP",
}

/**
 * The regions of health checker from which Route53 performs checks on the endpoint.
 */
export enum HealthCheckerRegions {
  US_EAST_1 = "us-east-1",
  US_WEST_1 = "us-west-1",
  US_WEST_2 = "us-west-2",
  EU_WEST_1 = "eu-west-1",
  AP_SOUTHEAST_1 = "ap-southeast-1",
  AP_SOUTHEAST_2 = "ap-southeast-2",
  AP_NORTHEAST_1 = "ap-northeast-1",
  SA_EAST_1 = "sa-east-1",
}

const IP_ADDRESS_REGEX_PATTERN =
  "(^((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))$|^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$)";
