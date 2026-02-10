import { ArnFormat, Stack, Tags } from "aws-cdk-lib";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
import * as route53 from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";
import { HealthCheckBase, HealthCheckOptions } from "./health-check";
import { HealthCheckType } from "./health-check-type";

export interface AlarmHealthCheckProps extends HealthCheckOptions {
  /**
   * The alarm that Route53 monitors
   */
  readonly alarm: cloudwatch.IAlarm;
  /**
   * The status to assign to the HealthCheck when CloudWatch has insufficient data about the metric
   */
  readonly insufficientDataHealthStatus?: InsufficientDataHealthStatus;
}

/**
 * Create a Route53 HealthCheck that monitors a CloudWatch Alarm.
 *
 * <b>Example</b>
 * ```typescript
 * const alarm new Alarm(stack, "Alarm", {
 *   // ...
 * });
 * new AlarmHealthCheck(stack, "HealthCheck", {
 *   alarm: alarm,
 * });
 * ```
 * @link https://docs.aws.amazon.com/de_de/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#aws-resource-route53-healthcheck-properties
 *
 * @resource AWS::Route53::HealthCheck
 */
export class AlarmHealthCheck extends HealthCheckBase {
  public readonly healthCheckId: string;

  constructor(scope: Construct, id: string, props: AlarmHealthCheckProps) {
    super(scope, id);

    const { alarmName, alarmArn } = props.alarm;
    // https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatch.html
    const alarmRegion = Stack.of(props.alarm).splitArn(alarmArn, ArnFormat.COLON_RESOURCE_NAME).region;

    const insufficientDataHealthStatus =
      props.insufficientDataHealthStatus ?? InsufficientDataHealthStatus.LAST_KNOWN_STATUS;

    const resource = new route53.CfnHealthCheck(this, "Resource", {
      healthCheckConfig: {
        alarmIdentifier: {
          name: alarmName,
          region: alarmRegion!,
        },
        insufficientDataHealthStatus: insufficientDataHealthStatus,
        type: HealthCheckType.CLOUDWATCH_METRIC,
      },
      healthCheckTags: [],
    });

    this.healthCheckId = resource.attrHealthCheckId;

    if (props.healthCheckName) {
      Tags.of(this).add("Name", props.healthCheckName);
    }
  }
}

export enum InsufficientDataHealthStatus {
  /**
   * Route53 considers the health check to be healthy.
   */
  HEALTHY = "Healthy",
  /**
   * Route53 considers the health check to be unhealthy.
   */
  UNHEALTHY = "Unhealthy",
  /**
   * Route53 uses the status of the health check from the last time that CloudWatch had sufficient data to determine the alarm state, otherwise healthy
   */
  LAST_KNOWN_STATUS = "LastKnownStatus",
}
