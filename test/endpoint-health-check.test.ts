import { Stack } from "aws-cdk-lib";
import { Annotations, Capture, Match, Template } from "aws-cdk-lib/assertions";
import { EndpointHealthCheck, HealthCheckerRegions } from "../src";

describe("EndpointHealthCheck", () => {
  it("Should match snapshot", () => {
    // Given
    const stack = new Stack();
    new EndpointHealthCheck(stack, "HealthCheck", {
      domainName: "pepperize.com",
    });

    // When
    const template = Template.fromStack(stack);
    const annotations = Annotations.fromStack(stack);

    // Then
    expect(template).toMatchSnapshot();
    annotations.hasNoError("/Default/HealthCheck", "*");
  });
  it("Should have resource with defaults", () => {
    // Given
    const stack = new Stack();
    new EndpointHealthCheck(stack, "HealthCheck", {
      domainName: "pepperize.com",
    });

    // When
    const template = Template.fromStack(stack);
    const annotations = Annotations.fromStack(stack);

    // Then
    template.hasResourceProperties("AWS::Route53::HealthCheck", {
      HealthCheckConfig: {
        FullyQualifiedDomainName: "pepperize.com",
        Port: 443,
        Type: "HTTPS",
        EnableSNI: true,
      },
    });
    annotations.hasNoError("/Default/HealthCheck", "*");
  });
  it("Should have error if domain name or ip address is omitted", () => {
    // Given
    const stack = new Stack();
    new EndpointHealthCheck(stack, "HealthCheck", {});

    // When
    const template = Template.fromStack(stack);
    const annotations = Annotations.fromStack(stack);

    // Then
    template.hasResource("AWS::Route53::HealthCheck", {});
    annotations.hasError("/Default/HealthCheck", Match.stringLikeRegexp(".*DomainName.*IpAddress.*"));
  });
  it("Should have errors", () => {
    // Given
    const stack = new Stack();
    new EndpointHealthCheck(stack, "HealthCheck", {
      ipAddress: "1.1.1.",
      port: 0,
      resourcePath: "#".repeat(256),
      searchString: "#".repeat(256),
      failureThreshold: 11,
      requestInterval: 31,
      regions: [HealthCheckerRegions.US_EAST_1],
    });

    // When
    const template = Template.fromStack(stack);
    const annotations = Annotations.fromStack(stack);

    // Then
    template.hasResource("AWS::Route53::HealthCheck", {});
    annotations.hasError("/Default/HealthCheck", Match.stringLikeRegexp("IpAddress"));
    annotations.hasError("/Default/HealthCheck", Match.stringLikeRegexp("Port"));
    annotations.hasError("/Default/HealthCheck", Match.stringLikeRegexp("ResourcePath"));
    annotations.hasError("/Default/HealthCheck", Match.stringLikeRegexp("SearchString"));
    annotations.hasError("/Default/HealthCheck", Match.stringLikeRegexp("FailureThreshold"));
    annotations.hasError("/Default/HealthCheck", Match.stringLikeRegexp("RequestInterval"));
    annotations.hasError("/Default/HealthCheck", Match.stringLikeRegexp("HealthCheckerRegions"));
  });
  it("Should have HealthCheckTags", () => {
    // Given
    const stack = new Stack();
    new EndpointHealthCheck(stack, "HealthCheck", {
      healthCheckName: "pepperize.com",
      domainName: "pepperize.com",
    });

    // When
    const template = Template.fromStack(stack);

    // Then
    template.hasResourceProperties("AWS::Route53::HealthCheck", {
      HealthCheckTags: [
        {
          Key: "Name",
          Value: "pepperize.com",
        },
      ],
    });
  });

  it("Should not have InsufficientDataHealthStatus", () => {
    // Given
    const stack = new Stack();
    new EndpointHealthCheck(stack, "HealthCheck", {
      healthCheckName: "pepperize.com",
      domainName: "pepperize.com",
    });

    // When
    const template = Template.fromStack(stack);

    // Then
    const capture = new Capture();
    template.hasResourceProperties("AWS::Route53::HealthCheck", {
      HealthCheckConfig: capture,
    });

    expect(capture.asObject()).not.toHaveProperty("InsufficientDataHealthStatus");
  });

  it("Should be of type HTTPS_STR_MATCH if a searchString is specified", () => {
    // Given
    const stack = new Stack();
    new EndpointHealthCheck(stack, "HealthCheck", {
      domainName: "pepperize.com",
      searchString: "UP",
    });

    // When
    const template = Template.fromStack(stack);
    const annotations = Annotations.fromStack(stack);

    // Then
    template.hasResourceProperties("AWS::Route53::HealthCheck", {
      HealthCheckConfig: {
        FullyQualifiedDomainName: "pepperize.com",
        Port: 443,
        Type: "HTTPS_STR_MATCH",
        EnableSNI: true,
      },
    });
    annotations.hasNoError("/Default/HealthCheck", "*");
  });
});
