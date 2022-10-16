import { ITaggable, Resource, TagManager, TagType } from "aws-cdk-lib";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";

/**
 * @internal
 */
export interface HealthCheckOptions {
  /**
   * The display name of this Route53 HealthCheck
   */
  readonly healthCheckName?: string;
  /**
   * Whether to invert the status of the Route53 health check status.
   */
  readonly inverted?: boolean;
}

export interface IHealthCheck {
  readonly healthCheckId: string;
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
export abstract class HealthCheckBase extends Resource implements IHealthCheck, ITaggable {
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
