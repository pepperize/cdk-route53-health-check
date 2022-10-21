import { App, Stack } from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import { EndpointHealthCheck } from "./endpoint-health-check";

const app = new App();

const shared = new Stack(app, "Shared");
const hostedZone = new route53.PublicHostedZone(shared, "HostedZone", {
  zoneName: "pepperize.com",
});

const primary = new Stack(app, "Primary");

const distribution = cloudfront.Distribution.fromDistributionAttributes(primary, "Distribution", {
  domainName: "pepperize.com",
  distributionId: "d111111abcdef8",
});
const recordSetPrimary = new route53.ARecord(primary, "RecordSetPrimary", {
  recordName: "www.pepperize.com",
  zone: hostedZone,
  target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
});

const healthCheckPrimary = new EndpointHealthCheck(primary, "HealthCheckPrimary", {
  domainName: "www.pepperize.com",
});
healthCheckPrimary.failoverPrimary(recordSetPrimary);

const secondary = new Stack(app, "Secondary");

const certificate = acm.Certificate.fromCertificateArn(
  secondary,
  "Certificate",
  "arn:aws:acm:region:account:certificate/certificate_ID"
);
const restApi = new apigateway.RestApi(secondary, "RestApi", {
  domainName: { domainName: "www-1.pepperize.com", certificate: certificate },
});
restApi.root.addResource("{proxy+}", {}).addMethod("ANY");
const recordSetSecondary = new route53.ARecord(secondary, "RecordSetSecondary", {
  recordName: "www-1.pepperize.com",
  zone: hostedZone,
  target: route53.RecordTarget.fromAlias(new targets.ApiGateway(restApi)),
});
const healthCheckSecondary = new EndpointHealthCheck(secondary, "HealthCheckSecondary", {
  domainName: "www-1.pepperize.com",
});
healthCheckSecondary.failoverSecondary(recordSetSecondary, true);

app.synth();
