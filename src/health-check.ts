import { ITaggable, Resource, TagManager, TagType } from "aws-cdk-lib";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
import * as route53 from "aws-cdk-lib/aws-route53";
import { RecordSet } from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";

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
   * Sets `this.healthCheckId` as the value for `HealthCheckId` on the given RecordSet.
   *
   * <b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>
   *
   * @param recordSet The Route53 RecordSet to configure failover
   * @param evaluateTargetHealth Inherit the health of the referenced Alias RecordSet Target
   * @param failover Sets `PRIMARY` or `SECONDARY` as the value for `Failover` on the given RecordSet.
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html#cfn-route53-aliastarget-evaluatetargethealth
   */
  failover(recordSet: RecordSet, evaluateTargetHealth?: boolean, failover?: Failover): void;
  /**
   * Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`.
   *
   * <b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>
   *
   * @param recordSet The Route53 RecordSet to configure failover
   * @param evaluateTargetHealth Inherit the health of the referenced Alias RecordSet Target
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html#cfn-route53-aliastarget-evaluatetargethealth
   */
  failoverPrimary(recordSet: route53.RecordSet, evaluateTargetHealth?: boolean): void;
  /**
   * Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`.
   *
   * <b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>
   *
   * @param recordSet The Route53 RecordSet to configure failover
   * @param evaluateTargetHealth Inherit the health of the referenced Alias RecordSet Target
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html#cfn-route53-aliastarget-evaluatetargethealth
   */
  failoverSecondary(recordSet: route53.RecordSet, evaluateTargetHealth?: boolean): void;
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
  /**
   * Import an existing Route53 HealthCheck.
   */
  public static fromHealthCheckId(scope: Construct, id: string, healthCheckId: string): IHealthCheck {
    return new (class Imported extends HealthCheckBase {
      public readonly healthCheckId = healthCheckId;
      constructor() {
        super(scope, id);
      }
    })();
  }

  public abstract readonly healthCheckId: string;

  readonly tags = new TagManager(TagType.STANDARD, "AWS::Route53::HealthCheck");

  failover(recordSet: RecordSet, evaluateTargetHealth?: boolean, failover?: Failover) {
    const resource = recordSet.node.defaultChild;

    if (!(resource instanceof route53.CfnRecordSet)) {
      throw new Error(`RecordSet ${recordSet.node.path} doesn't have a default child of type CfnRecordSet`);
    }

    resource.healthCheckId = this.healthCheckId;

    if (failover) {
      resource.failover = failover;
    }

    if (evaluateTargetHealth) {
      resource.addPropertyOverride("AliasTarget.EvaluateTargetHealth", evaluateTargetHealth);
    }
  }

  failoverPrimary(recordSet: route53.RecordSet, evaluateTargetHealth?: boolean) {
    this.failover(recordSet, evaluateTargetHealth, Failover.PRIMARY);
  }

  failoverSecondary(recordSet: route53.RecordSet, evaluateTargetHealth?: boolean) {
    this.failover(recordSet, evaluateTargetHealth, Failover.SECONDARY);
  }

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

export enum Failover {
  /**
   * The primary record set
   */
  PRIMARY = "PRIMARY",
  /**
   * The secondary record set
   */
  SECONDARY = "SECONDARY",
}
