import { Stack } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as elasticloadbalancingv2 from "aws-cdk-lib/aws-elasticloadbalancingv2";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import { EndpointHealthCheck } from "../src";

describe("HealthCheckBase", () => {
  it("Should configure DNS failover", () => {
    // Given
    const stack = new Stack();

    const hostedZone = new route53.PublicHostedZone(stack, "HostedZone", {
      zoneName: "pepperize.com",
    });

    const distribution = cloudfront.Distribution.fromDistributionAttributes(stack, "Distribution", {
      domainName: "pepperize.com",
      distributionId: "d111111abcdef8",
    });
    const recordSetPrimary = new route53.ARecord(stack, "RecordSetPrimary", {
      recordName: "www.pepperize.com",
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
    });

    const healthCheckPrimary = new EndpointHealthCheck(stack, "HealthCheckPrimary", {
      domainName: "www.pepperize.com",
    });
    healthCheckPrimary.failoverPrimary(recordSetPrimary);

    const alb = new elasticloadbalancingv2.ApplicationLoadBalancer(stack, "ApplicationLoadBalancer", {
      vpc: new ec2.Vpc(stack, "Vpc"),
    });
    const recordSetSecondary = new route53.ARecord(stack, "RecordSetSecondary", {
      recordName: "www-1.pepperize.com",
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(new targets.LoadBalancerTarget(alb)),
    });
    const healthCheckSecondary = new EndpointHealthCheck(stack, "HealthCheckSecondary", {
      domainName: "www-1.pepperize.com",
    });
    healthCheckSecondary.failoverSecondary(recordSetSecondary, true);

    // When
    const template = Template.fromStack(stack);

    // Then
    expect(template).toMatchSnapshot();

    template.hasResourceProperties("AWS::Route53::RecordSet", {
      AliasTarget: Match.not({
        EvaluateTargetHealth: true,
      }),
      Failover: "PRIMARY",
      HealthCheckId: {
        "Fn::GetAtt": Match.arrayWith([Match.stringLikeRegexp("HealthCheckPrimary"), "HealthCheckId"]),
      },
      Name: "www.pepperize.com.",
      Type: "A",
    });

    template.hasResourceProperties("AWS::Route53::RecordSet", {
      AliasTarget: {
        EvaluateTargetHealth: true,
      },
      Failover: "SECONDARY",
      HealthCheckId: {
        "Fn::GetAtt": Match.arrayWith([Match.stringLikeRegexp("HealthCheckSecondary"), "HealthCheckId"]),
      },
      Name: "www-1.pepperize.com.",
      Type: "A",
    });
  });
});
