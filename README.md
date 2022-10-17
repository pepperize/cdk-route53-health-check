[![GitHub](https://img.shields.io/github/license/pepperize/cdk-route53-health-check?style=flat-square)](https://github.com/pepperize/cdk-route53-health-check/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-route53-health-check?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-route53-health-check)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-route53-health-check?style=flat-square)](https://pypi.org/project/pepperize.cdk-route53-health-check/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.Route53HealthCheck?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.Route53HealthCheck/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.pepperize/cdk-route53-health-check?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/pepperize/cdk-route53-health-check/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/cdk-route53-health-check/release/main?label=release&style=flat-square)](https://github.com/pepperize/cdk-route53-health-check/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-route53-health-check?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-route53-health-check/releases)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/pepperize/cdk-route53-health-check)

# AWS CDK Route53 HealthCheck

Create Route53 HealthChecks to monitor TCP, HTTP, HTTPS endpoints, to monitor CloudWatch Alarms and to monitor other Route53 HealthChecks.

Currently supported types of Route53 HealthChecks:

- [Health checks that monitor an endpoint](https://github.com/pepperize/cdk-route53-health-check#healthcheck-for-an-endpoint)
- [Health checks that monitor other health checks](https://github.com/pepperize/cdk-route53-health-check#healthcheck-to-monitor-cloudwatch-alarms)
- [Health checks that monitor CloudWatch alarms](https://github.com/pepperize/cdk-route53-health-check#healthcheck-to-monitor-other-healthchecks)
- [Configure DNS failover](https://github.com/pepperize/cdk-route53-health-check#configuring-dns-failover)

Easily create a CloudWatch Alarm based on the Route53 HealthCheck:

```typescript
const healthCheck = new EndpointHealthCheck(scope, "HealthCheck", {
  domainName: "pepperize.com",
});

const alarm = new cloudwatch.Alarm(scope, "Alarm", {
  metric: healthCheck.metricHealthCheckStatus(),
  comparisonOperator: cloudwatch.ComparisonOperator.LESS_THAN_THRESHOLD,
  threshold: 1,
  evaluationPeriods: 1,
});
```

See more options [API Reference](https://github.com/pepperize/cdk-route53-health-check/blob/main/API.md#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps)

## Install

### TypeScript

```shell
npm install @pepperize/cdk-route53-health-check
```

or

```shell
yarn add @pepperize/cdk-route53-health-check
```

### Python

```shell
pip install pepperize.cdk-route53-health-check
```

### C# / .Net

```
dotnet add package Pepperize.CDK.Route53HealthCheck
```

### Java

```xml
<dependency>
  <groupId>com.pepperize</groupId>
  <artifactId>cdk-route53-health-check</artifactId>
  <version>${cdkRoute53HealthCheck.version}</version>
</dependency>
```

## Usage

```shell
npm install @pepperize/cdk-route53-health-check
```

See [API.md](https://github.com/pepperize/cdk-route53-health-check/blob/main/API.md).

### HealthCheck for an endpoint

**HTTPS health check**

```typescript
new EndpointHealthCheck(scope, "HealthCheck", {
  domainName: "pepperize.com",
});
```

Generates

```yaml
Resources:
  Type: AWS::Route53::HealthCheck
  Properties:
    HealthCheckConfig:
      FullyQualifiedDomainName: "pepperize.com"
      Port: 443
      Type: "HTTPS"
      EnableSNI: true
```

**complete configuration**

```typescript
import { HealthCheckerRegions } from "./endpoint-health-check";

new EndpointHealthCheck(scope, "HealthCheck", {
  domainName: "pepperize.com", //	The domain name that Route53 performs health checks on. Route53 resolves the IP address and performs the lookup.
  enableSni: true, //	Specify that Route53 sends the host name for TLS negotiation.
  failureThreshold: 3, //	The number of consecutive health checks that an endpoint must pass or fail for Route53 to change the current status of the endpoint between healthy and unhealthy.
  healthCheckName: "pepperize.com", //	The display name of this Route53 HealthCheck.
  inverted: false, //	Whether to invert the status of the Route53 health check status.
  ipAddress: "1.1.1.1", //	The ip address that Route53 performs health checks on. Optionally a domain name may be given.
  latencyGraphs: true, //	Whether Route53 measures the latency between health checkers in multiple AWS regions and your endpoint, and displays a CloudWatch latency graphs in the Route53 console.
  port: 443, //	The port that Route53 performs health checks.
  protocol: Protocol.HTTPS, //	The protocol that Route53 uses to communicate with the endpoint.
  regions: [HealthCheckerRegions.EU_WEST_1, HealthCheckerRegions.US_EAST_1, HealthCheckerRegions.US_WEST_1], //	The list of regions from which Route53 health checkers check the endpoint.
  requestInterval: 30, //	The number of seconds between the time that Route53 gets a response from your endpoint and the time that it sends the next health check request.
  resourcePath: "/health-check", //	The path for HTTP or HTTPS health checks.
  searchString: "OK", //	The search string for HTTP or HTTPS health checks.
});
```

See for more options [API Reference - EndpointHealthCheckProps](https://github.com/pepperize/cdk-route53-health-check/blob/main/API.md#endpointhealthcheckprops-)

### HealthCheck to monitor other HealthChecks

```typescript
const healthCheck1 = new EndpointHealthCheck(stack, "HealthCheck1", {
  domainName: "pepperize.com",
});
const healthCheck2 = EndpointHealthCheck.fromHealthCheckId(
  scope,
  "HealthCheck2",
  "9ebee2db-6292-4803-9838-327e6example"
);
new CalculatedHealthCheck(scope, "CalculatedHealthCheck", {
  childHealthChecks: [healthCheck1, healthCheck2],
});
```

See for more options [API Reference - CalculatedHealthCheckProps](https://github.com/pepperize/cdk-route53-health-check/blob/main/API.md#calculatedhealthcheckprops-)

### HealthCheck to monitor CloudWatch Alarms

```typescript
const alarm = cloudwatch.Alarm.fromAlarmArn(
  scope,
  "Alarm",
  "arn:aws:cloudwatch:us-east-1:123456789012:alarm:any-alarm"
);
new AlarmHealthCheck(scope, "HealthCheck", {
  alarm: alarm,
});
```

See for more options [API Reference - AlarmHealthCheckProps](https://github.com/pepperize/cdk-route53-health-check/blob/main/API.md#alarmhealthcheckprops-)

### Configuring DNS Failover

An example active-passive DNS failover configuration

**Primary**

```typescript
// An alias record set for a CloudFront distribution
const recordSetPrimary = new route53.ARecord(scope, "RecordSetPrimary", {
  recordName: "www.pepperize.com",
  zone: hostedZone,
  target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
});
// The health check for the CloudFront distribution
const healthCheckPrimary = new EndpointHealthCheck(scope, "HealthCheckPrimary", {
  domainName: "www.pepperize.com",
});
// Configure the HealthCheckId and Failover on the record set
healthCheckPrimary.failoverPrimary(recordSetPrimary);
```

**Secondary**

```typescript
// An alias record set for an Application Load Balancer
const recordSetSecondary = new route53.ARecord(scope, "RecordSetSecondary", {
  recordName: "www-1.pepperize.com",
  zone: hostedZone,
  target: route53.RecordTarget.fromAlias(new targets.LoadBalancerTarget(alb)),
});
// The health check for the Application Load Balancer
const healthCheckSecondary = new EndpointHealthCheck(scope, "HealthCheckSecondary", {
  domainName: "www-1.pepperize.com",
});
// Configure the HealthCheckId and Failover on the record set
healthCheckSecondary.failoverSecondary(recordSetSecondary, true);
```

See for more options [API Reference - IHealthCheck](https://github.com/pepperize/cdk-route53-health-check/blob/main/API.md#ihealthcheck-)

[How health checks work in complex Amazon Route 53 configurations](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html)
