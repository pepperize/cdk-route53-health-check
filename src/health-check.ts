import { ITaggable, TagManager, TagType } from "aws-cdk-lib";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
import { Construct } from "constructs";

export interface HealthCheckOptions {
  readonly healthCheckName?: string;
  readonly inverted?: boolean;
}

export interface IHealthCheck {
  /**
   * Return the given named metric for this HealthCheck.
   */
  metric(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;

  /**
   * Route53 health checkers report that the HealthCheck is healthy or unhealthy.
   */
  metricHealthCheckStatus(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
}

/**
 * @internal
 */
export abstract class HealthCheckBase extends Construct implements IHealthCheck, ITaggable {
  public abstract readonly healthCheckId: string;

  readonly tags = new TagManager(TagType.STANDARD, "AWS::Route53::HealthCheck");

  /**
   * Return the given named metric for this HealthCheck.
   */
  metric(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return new cloudwatch.Metric({
      namespace: "AWS/Route53",
      metricName,
      dimensionsMap: { HealthCheckId: this.healthCheckId },
      ...props,
    }).attachTo(this);
  }
  /**
   * Route53 health checkers report that the HealthCheck is healthy or unhealthy.
   */
  metricHealthCheckStatus(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.metric("HealthCheckStatus", { statistic: cloudwatch.Statistic.MINIMUM, ...props });
  }
}

/**
 * The type of health check to create.
 */
export enum HealthCheckType {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  HTTP_STR_MATCH = "HTTP_STR_MATCH",
  HTTPS_STR_MATCH = "HTTPS_STR_MATCH",
  TCP = "TCP",
  CALCULATED = "CALCULATED",
  CLOUDWATCH_METRIC = "CLOUDWATCH_METRIC",
  RECOVERY_CONTROL = "RECOVERY_CONTROL",
}

export enum InsufficientDataHealthStatus {
  HEALTHY = "Healthy",
  UNHEALTHY = "Unhealthy",
  LAST_KNOWN_STATUS = "LastKnownStatus",
}
