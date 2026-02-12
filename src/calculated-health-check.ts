import { Annotations, Lazy, Tags } from "aws-cdk-lib";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
import * as route53 from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";
import { HealthCheckBase, HealthCheckOptions, IHealthCheck } from "./health-check";
import { HealthCheckType } from "./health-check-type";

export interface CalculatedHealthCheckProps extends HealthCheckOptions {
  /**
   * The list of HealthCheck that monitors other Route53 HealthChecks.
   */
  readonly childHealthChecks?: IHealthCheck[];
  /**
   * The number of child HealthChecks that Amazon Route53 must consider healthy
   */
  readonly healthThreshold?: number;
}

/**
 * Create a Route53 HealthCheck that monitors other Route53 HealthChecks.
 *
 * <b>Example</b>
 * ```typescript
 * const healthCheck = new EndpointHealthCheck(stack, "HealthCheck", {
 *   domainName: "pepperize.com",
 * });
 * new CalculatedHealthCheck(stack, "CalculatedHealthCheck", {
 *   childHealthChecks: [healthCheck],
 * });
 * ```
 * @link https://docs.aws.amazon.com/de_de/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#aws-resource-route53-healthcheck-properties
 *
 * @resource AWS::Route53::HealthCheck
 */
export class CalculatedHealthCheck extends HealthCheckBase {
  public readonly healthCheckId: string;

  private childHealthChecks: IHealthCheck[];

  constructor(scope: Construct, id: string, props: CalculatedHealthCheckProps) {
    super(scope, id);

    this.childHealthChecks = props.childHealthChecks ?? [];

    if (this.childHealthChecks.length > 256) {
      Annotations.of(this).addError("ChildHealthChecks has to be smaller than 256");
    }

    if (undefined != props.healthThreshold && props.healthThreshold > 256) {
      Annotations.of(this).addError("HealthThreshold has to be smaller than 256");
    }

    const resource = new route53.CfnHealthCheck(this, "Resource", {
      healthCheckConfig: {
        childHealthChecks: Lazy.list({
          produce: () => this.childHealthChecks.map((healthCheck) => healthCheck.healthCheckId),
        }),
        healthThreshold: props.healthThreshold,
        type: HealthCheckType.CALCULATED,
      },
      healthCheckTags: this.resolveSafeTags(),
    });

    this.healthCheckId = resource.attrHealthCheckId;

    if (props.healthCheckName) {
      Tags.of(this).add("Name", props.healthCheckName);
    }
  }

  /**
   * The number of ChildHealthChecks that are healthy that Route53 is monitoring.
   *
   * Valid statistics: Average (recommended), Minimum, Maximum
   */
  public metricChildHealthCheckHealthyCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.metric("ChildHealthCheckHealthyCount", { statistic: cloudwatch.Statistic.AVERAGE, ...props });
  }

  public addChildHealthCheck(healthCheck: IHealthCheck) {
    this.childHealthChecks.push(healthCheck);
  }
}
