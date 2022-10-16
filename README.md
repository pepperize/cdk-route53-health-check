[![GitHub](https://img.shields.io/github/license/pepperize/cdk-route53-health-check?style=flat-square)](https://github.com/pepperize/cdk-route53-health-check/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-route53-health-check?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-route53-health-check)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-route53-health-check?style=flat-square)](https://pypi.org/project/pepperize.cdk-route53-health-check/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.Route53HealthCheck?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.Route53HealthCheck/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.pepperize/cdk-route53-health-check?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/pepperize/cdk-route53-health-check/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/cdk-route53-health-check/release/main?label=release&style=flat-square)](https://github.com/pepperize/cdk-route53-health-check/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-route53-health-check?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-route53-health-check/releases)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/pepperize/cdk-route53-health-check)

# AWS CDK Route53 HealthCheck

Create Route53 HealthChecks to monitor TCP, HTTP, HTTPS endpoints, CloudWatch Alarms and other Route53 HealthChecks.

Currently supported types of Route53 HealthChecks:

- [Health checks that monitor an endpoint](https://github.com/pepperize/cdk-route53-health-check#create-a-route53-healthcheck-for-an-endpoint)
- [Health checks that monitor other health checks](https://github.com/pepperize/cdk-route53-health-check#create-a-route53-healthcheck-to-monitor-cloudwatch-alarms)
- [Health checks that monitor CloudWatch alarms](https://github.com/pepperize/cdk-route53-health-check#create-a-route53-healthcheck-to-monitor-other-healthchecks)

Easily create a CloudWatch Alarm based on the Route53 HealthCheck:

```typescript
const healthCheck = new EndpointHealthCheck(stack, "HealthCheck", {
  domainName: "pepperize.com",
});

const alarm = new cloudwatch.Alarm(this, "Alarm", {
  metric: healthCheck.metric(),
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

### Create a Route53 HealthCheck for an endpoint

```typescript
new EndpointHealthCheck(stack, "HealthCheck", {
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

See for more options [API Reference - EndpointHealthCheckProps](https://github.com/pepperize/cdk-route53-health-check/blob/main/API.md#endpointhealthcheckprops-)

### Create a Route53 HealthCheck to monitor other HealthChecks

```typescript
const healthCheck1 = new EndpointHealthCheck(stack, "HealthCheck1", {
  domainName: "pepperize.com",
});
const healthCheck2 = EndpointHealthCheck.fromHealthCheckId(
  stack,
  "HealthCheck2",
  "9ebee2db-6292-4803-9838-327e6example"
);
new CalculatedHealthCheck(stack, "CalculatedHealthCheck", {
  childHealthChecks: [healthCheck1, healthCheck2],
});
```

See for more options [API Reference - CalculatedHealthCheckProps](https://github.com/pepperize/cdk-route53-health-check/blob/main/API.md#calculatedhealthcheckprops-)

### Create a Route53 HealthCheck to monitor CloudWatch Alarms

```typescript
const alarm = cloudwatch.Alarm.fromAlarmArn(
  stack,
  "Alarm",
  "arn:aws:cloudwatch:us-east-1:123456789012:alarm:any-alarm"
);
new AlarmHealthCheck(stack, "HealthCheck", {
  alarm: alarm,
});
```

See for more options [API Reference - AlarmHealthCheckProps](https://github.com/pepperize/cdk-route53-health-check/blob/main/API.md#alarmhealthcheckprops-)
