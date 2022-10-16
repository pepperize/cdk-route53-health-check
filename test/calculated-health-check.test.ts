import { Stack } from "aws-cdk-lib";
import { Annotations, Capture, Match, Template } from "aws-cdk-lib/assertions";
import { EndpointHealthCheck } from "../src";
import { CalculatedHealthCheck } from "../src/calculated-health-check";

describe("CalculatedHealthCheck", () => {
  it("Should match snapshot", () => {
    // Given
    const stack = new Stack();
    const healthCheck = new EndpointHealthCheck(stack, "EndpointHealthCheck", {
      domainName: "pepperize.com",
    });
    new CalculatedHealthCheck(stack, "CalculatedHealthCheck", {
      childHealthChecks: [healthCheck],
    });

    // When
    const template = Template.fromStack(stack);
    const annotations = Annotations.fromStack(stack);

    // Then
    expect(template).toMatchSnapshot();
    annotations.hasNoError("/Default/CalculatedHealthCheck", "*");
  });
  it("Should have resource", () => {
    // Given
    const stack = new Stack();
    const endpointHealthCheck = EndpointHealthCheck.fromHealthCheckId(
      stack,
      "EndpointHealthCheck",
      "9ebee2db-6292-4803-9838-327e6example"
    );
    const calculatedHealthCheck = new CalculatedHealthCheck(stack, "CalculatedHealthCheck", {
      healthCheckName: "calculated",
      childHealthChecks: [],
    });
    calculatedHealthCheck.addChildHealthCheck(endpointHealthCheck);

    // When
    const template = Template.fromStack(stack);
    const annotations = Annotations.fromStack(stack);
    const capture = new Capture();

    // Then
    template.hasResourceProperties("AWS::Route53::HealthCheck", {
      HealthCheckConfig: {
        ChildHealthChecks: capture,
        Type: "CALCULATED",
      },
      HealthCheckTags: [
        {
          Key: "Name",
          Value: "calculated",
        },
      ],
    });
    expect(capture.asArray()).toEqual(["9ebee2db-6292-4803-9838-327e6example"]);
    annotations.hasNoError("/Default/CalculatedHealthCheck", "*");
  });
  it("Should have errors", () => {
    // Given
    const stack = new Stack();
    const healthCheck = new EndpointHealthCheck(stack, "EndpointHealthCheck", {
      domainName: "pepperize.com",
    });
    new CalculatedHealthCheck(stack, "CalculatedHealthCheck", {
      healthCheckName: "calculated",
      childHealthChecks: [healthCheck],
      healthThreshold: 257,
    });

    // When
    const template = Template.fromStack(stack);
    const annotations = Annotations.fromStack(stack);

    // Then
    template.hasResourceProperties("AWS::Route53::HealthCheck", {
      HealthCheckConfig: {
        ChildHealthChecks: Match.anyValue(),
        Type: "CALCULATED",
      },
      HealthCheckTags: [
        {
          Key: "Name",
          Value: "calculated",
        },
      ],
    });
    annotations.hasError("/Default/CalculatedHealthCheck", Match.stringLikeRegexp("HealthThreshold"));
  });
  it("Should have HealthCheckTags", () => {
    // Given
    const stack = new Stack();
    const healthCheck = new EndpointHealthCheck(stack, "EndpointHealthCheck", {
      domainName: "pepperize.com",
    });
    new CalculatedHealthCheck(stack, "CalculatedHealthCheck", {
      healthCheckName: "calculated",
      childHealthChecks: [healthCheck],
    });

    // When
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties("AWS::Route53::HealthCheck", {
      HealthCheckTags: [
        {
          Key: "Name",
          Value: "calculated",
        },
      ],
    });
  });
});
