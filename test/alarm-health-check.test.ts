import { Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";
import { AlarmHealthCheck } from "../src";

describe("AlarmHealthCheck", () => {
  it("Should match snapshot", () => {
    // Given
    const stack = new Stack(undefined, undefined, { env: { account: "123456789012", region: "us-east-1" } });
    const alarm = cloudwatch.Alarm.fromAlarmArn(
      stack,
      "Alarm",
      "arn:aws:cloudwatch:us-east-1:123456789012:alarm:any-alarm"
    );
    new AlarmHealthCheck(stack, "HealthCheck", {
      alarm: alarm,
    });

    // When
    const template = Template.fromStack(stack);

    // Then
    expect(template).toMatchSnapshot();
  });
  it("Should have resource", () => {
    // Given
    const stack = new Stack(undefined, undefined, { env: { account: "123456789012", region: "us-east-1" } });
    const alarm = cloudwatch.Alarm.fromAlarmArn(
      stack,
      "Alarm",
      "arn:aws:cloudwatch:us-east-1:123456789012:alarm:any-alarm"
    );
    new AlarmHealthCheck(stack, "HealthCheck", {
      healthCheckName: "alarm",
      alarm: alarm,
    });

    // When
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties("AWS::Route53::HealthCheck", {
      HealthCheckConfig: {
        AlarmIdentifier: {
          Name: "any-alarm",
          Region: "us-east-1",
        },
      },
      HealthCheckTags: [
        {
          Key: "Name",
          Value: "alarm",
        },
      ],
    });
  });
});
