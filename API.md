# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EndpointHealthCheck <a name="EndpointHealthCheck" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck"></a>

- *Implements:* <a href="#@pepperize/cdk-route53-health-check.IHealthCheck">IHealthCheck</a>, aws-cdk-lib.ITaggable

Create a Route53 HealthCheck that monitors an endpoint either by domain name or by IP address.

<b>Example</b>
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

> [https://docs.aws.amazon.com/de_de/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#aws-resource-route53-healthcheck-properties](https://docs.aws.amazon.com/de_de/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#aws-resource-route53-healthcheck-properties)

#### Initializers <a name="Initializers" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.Initializer"></a>

```typescript
import { EndpointHealthCheck } from '@pepperize/cdk-route53-health-check'

new EndpointHealthCheck(scope: Construct, id: string, props: EndpointHealthCheckProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps">EndpointHealthCheckProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps">EndpointHealthCheckProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.metric">metric</a></code> | Return the given named metric for this HealthCheck. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricHealthCheckPercentageHealthy">metricHealthCheckPercentageHealthy</a></code> | The percentage of Route53 health checkers that report that the status of the health check is healthy. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricHealthCheckStatus">metricHealthCheckStatus</a></code> | Route53 health checkers report that the HealthCheck is healthy or unhealthy. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricSSLHandshakeTime">metricSSLHandshakeTime</a></code> | The time in milliseconds that it took Route53 health checkers to complete the SSL/TLS handshake. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricTimeToFirstByte">metricTimeToFirstByte</a></code> | The time in milliseconds that it took Route53 health checkers to receive the first byte of the response to an HTTP or HTTPS request. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `metric` <a name="metric" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this HealthCheck.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHealthCheckPercentageHealthy` <a name="metricHealthCheckPercentageHealthy" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricHealthCheckPercentageHealthy"></a>

```typescript
public metricHealthCheckPercentageHealthy(props?: MetricOptions): Metric
```

The percentage of Route53 health checkers that report that the status of the health check is healthy.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricHealthCheckPercentageHealthy.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHealthCheckStatus` <a name="metricHealthCheckStatus" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricHealthCheckStatus"></a>

```typescript
public metricHealthCheckStatus(props?: MetricOptions): Metric
```

Route53 health checkers report that the HealthCheck is healthy or unhealthy.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricHealthCheckStatus.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSSLHandshakeTime` <a name="metricSSLHandshakeTime" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricSSLHandshakeTime"></a>

```typescript
public metricSSLHandshakeTime(props?: MetricOptions): Metric
```

The time in milliseconds that it took Route53 health checkers to complete the SSL/TLS handshake.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricSSLHandshakeTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTimeToFirstByte` <a name="metricTimeToFirstByte" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricTimeToFirstByte"></a>

```typescript
public metricTimeToFirstByte(props?: MetricOptions): Metric
```

The time in milliseconds that it took Route53 health checkers to receive the first byte of the response to an HTTP or HTTPS request.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricTimeToFirstByte.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.isConstruct"></a>

```typescript
import { EndpointHealthCheck } from '@pepperize/cdk-route53-health-check'

EndpointHealthCheck.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | TagManager to set, remove and format tags. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

TagManager to set, remove and format tags.

---


## Structs <a name="Structs" id="Structs"></a>

### EndpointHealthCheckProps <a name="EndpointHealthCheckProps" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.Initializer"></a>

```typescript
import { EndpointHealthCheckProps } from '@pepperize/cdk-route53-health-check'

const endpointHealthCheckProps: EndpointHealthCheckProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.domainName">domainName</a></code> | <code>string</code> | The domain name that Route53 performs health checks on. Route53 resolves the IP address and performs the lookup. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.enableSni">enableSni</a></code> | <code>boolean</code> | Specify that Route53 sends the host name for TLS negotiation. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | The number of consecutive health checks that an endpoint must pass or fail for Route53 to change the current status of the endpoint between healthy and unhealthy. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.healthCheckName">healthCheckName</a></code> | <code>string</code> | The display name of this Route53 HealthCheck. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.inverted">inverted</a></code> | <code>boolean</code> | Whether to invert the status of the Route53 health check status. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.ipAddress">ipAddress</a></code> | <code>string</code> | The ip address that Route53 performs health checks on. Optionally a domain name may be given. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.latencyGraphs">latencyGraphs</a></code> | <code>boolean</code> | Whether Route53 measures the latency between health checkers in multiple AWS regions and your endpoint, and displays a CloudWatch latency graphs in the Route53 console. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.port">port</a></code> | <code>number</code> | The port that Route53 performs health checks. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.protocol">protocol</a></code> | <code><a href="#@pepperize/cdk-route53-health-check.Protocol">Protocol</a></code> | The protocol that Route53 uses to communicate with the endpoint. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.regions">regions</a></code> | <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckerRegions">HealthCheckerRegions</a>[]</code> | The list of regions from which Route53 health checkers check the endpoint. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.requestInterval">requestInterval</a></code> | <code>number</code> | The number of seconds between the time that Route53 gets a response from your endpoint and the time that it sends the next health check request. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The path for HTTP or HTTPS health checks. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.searchString">searchString</a></code> | <code>string</code> | The search string for HTTP or HTTPS health checks. |

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name that Route53 performs health checks on. Route53 resolves the IP address and performs the lookup.

If IP address is given, it's used as the host name.

<b>Either DomainName or IpAddress must be specified</b>

---

##### `enableSni`<sup>Optional</sup> <a name="enableSni" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.enableSni"></a>

```typescript
public readonly enableSni: boolean;
```

- *Type:* boolean
- *Default:* true for HTTPS

Specify that Route53 sends the host name for TLS negotiation.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

The number of consecutive health checks that an endpoint must pass or fail for Route53 to change the current status of the endpoint between healthy and unhealthy.

Provide a number between 1 and 10.

---

##### `healthCheckName`<sup>Optional</sup> <a name="healthCheckName" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.healthCheckName"></a>

```typescript
public readonly healthCheckName: string;
```

- *Type:* string

The display name of this Route53 HealthCheck.

---

##### `inverted`<sup>Optional</sup> <a name="inverted" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.inverted"></a>

```typescript
public readonly inverted: boolean;
```

- *Type:* boolean

Whether to invert the status of the Route53 health check status.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The ip address that Route53 performs health checks on. Optionally a domain name may be given.

<b>An IP address must be specified if protocol TCP</b>

---

##### `latencyGraphs`<sup>Optional</sup> <a name="latencyGraphs" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.latencyGraphs"></a>

```typescript
public readonly latencyGraphs: boolean;
```

- *Type:* boolean

Whether Route53 measures the latency between health checkers in multiple AWS regions and your endpoint, and displays a CloudWatch latency graphs in the Route53 console.

<b>Can't be changed after HealthCheck is deployed</b>

---

##### `port`<sup>Optional</sup> <a name="port" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 80 for HTTP; 443 for HTTPS

The port that Route53 performs health checks.

The port must be between 1 and 65535.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#@pepperize/cdk-route53-health-check.Protocol">Protocol</a>
- *Default:* HTTPS

The protocol that Route53 uses to communicate with the endpoint.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.regions"></a>

```typescript
public readonly regions: HealthCheckerRegions[];
```

- *Type:* <a href="#@pepperize/cdk-route53-health-check.HealthCheckerRegions">HealthCheckerRegions</a>[]

The list of regions from which Route53 health checkers check the endpoint.

<b>If omitted Route53 performs checks from all health checker regions.</b>

---

##### `requestInterval`<sup>Optional</sup> <a name="requestInterval" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.requestInterval"></a>

```typescript
public readonly requestInterval: number;
```

- *Type:* number

The number of seconds between the time that Route53 gets a response from your endpoint and the time that it sends the next health check request.

Each Route53 health checker makes requests at this interval. Provide a number between 10 and 30.

<i>If you choose an interval of 10 and there are 15 health checkers, the endpoint will receive approximately 1 request per second.</i>

<b>Can't be changed after HealthCheck is deployed</b>

---

##### `resourcePath`<sup>Optional</sup> <a name="resourcePath" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The path for HTTP or HTTPS health checks.

Provide a string between 1 and 255 length.

---

##### `searchString`<sup>Optional</sup> <a name="searchString" id="@pepperize/cdk-route53-health-check.EndpointHealthCheckProps.property.searchString"></a>

```typescript
public readonly searchString: string;
```

- *Type:* string

The search string for HTTP or HTTPS health checks.

Route53 will search in the response body. Provide a string between 1 and 255 length.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IHealthCheck <a name="IHealthCheck" id="@pepperize/cdk-route53-health-check.IHealthCheck"></a>

- *Implemented By:* <a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck">EndpointHealthCheck</a>, <a href="#@pepperize/cdk-route53-health-check.IHealthCheck">IHealthCheck</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.IHealthCheck.metric">metric</a></code> | Return the given named metric for this HealthCheck. |
| <code><a href="#@pepperize/cdk-route53-health-check.IHealthCheck.metricHealthCheckStatus">metricHealthCheckStatus</a></code> | Route53 health checkers report that the HealthCheck is healthy or unhealthy. |

---

##### `metric` <a name="metric" id="@pepperize/cdk-route53-health-check.IHealthCheck.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this HealthCheck.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@pepperize/cdk-route53-health-check.IHealthCheck.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.IHealthCheck.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHealthCheckStatus` <a name="metricHealthCheckStatus" id="@pepperize/cdk-route53-health-check.IHealthCheck.metricHealthCheckStatus"></a>

```typescript
public metricHealthCheckStatus(props?: MetricOptions): Metric
```

Route53 health checkers report that the HealthCheck is healthy or unhealthy.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.IHealthCheck.metricHealthCheckStatus.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---


## Enums <a name="Enums" id="Enums"></a>

### HealthCheckerRegions <a name="HealthCheckerRegions" id="@pepperize/cdk-route53-health-check.HealthCheckerRegions"></a>

The regions of health checker from which Route53 performs checks on the endpoint.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckerRegions.US_EAST_1">US_EAST_1</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckerRegions.US_WEST_1">US_WEST_1</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckerRegions.US_WEST_2">US_WEST_2</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckerRegions.EU_WEST_1">EU_WEST_1</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckerRegions.AP_SOUTHEAST_1">AP_SOUTHEAST_1</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckerRegions.AP_SOUTHEAST_2">AP_SOUTHEAST_2</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckerRegions.AP_NORTHEAST_1">AP_NORTHEAST_1</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckerRegions.SA_EAST_1">SA_EAST_1</a></code> | *No description.* |

---

##### `US_EAST_1` <a name="US_EAST_1" id="@pepperize/cdk-route53-health-check.HealthCheckerRegions.US_EAST_1"></a>

---


##### `US_WEST_1` <a name="US_WEST_1" id="@pepperize/cdk-route53-health-check.HealthCheckerRegions.US_WEST_1"></a>

---


##### `US_WEST_2` <a name="US_WEST_2" id="@pepperize/cdk-route53-health-check.HealthCheckerRegions.US_WEST_2"></a>

---


##### `EU_WEST_1` <a name="EU_WEST_1" id="@pepperize/cdk-route53-health-check.HealthCheckerRegions.EU_WEST_1"></a>

---


##### `AP_SOUTHEAST_1` <a name="AP_SOUTHEAST_1" id="@pepperize/cdk-route53-health-check.HealthCheckerRegions.AP_SOUTHEAST_1"></a>

---


##### `AP_SOUTHEAST_2` <a name="AP_SOUTHEAST_2" id="@pepperize/cdk-route53-health-check.HealthCheckerRegions.AP_SOUTHEAST_2"></a>

---


##### `AP_NORTHEAST_1` <a name="AP_NORTHEAST_1" id="@pepperize/cdk-route53-health-check.HealthCheckerRegions.AP_NORTHEAST_1"></a>

---


##### `SA_EAST_1` <a name="SA_EAST_1" id="@pepperize/cdk-route53-health-check.HealthCheckerRegions.SA_EAST_1"></a>

---


### HealthCheckType <a name="HealthCheckType" id="@pepperize/cdk-route53-health-check.HealthCheckType"></a>

The type of health check to create.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckType.HTTP">HTTP</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckType.HTTPS">HTTPS</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckType.HTTP_STR_MATCH">HTTP_STR_MATCH</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckType.HTTPS_STR_MATCH">HTTPS_STR_MATCH</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckType.TCP">TCP</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckType.CALCULATED">CALCULATED</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckType.CLOUDWATCH_METRIC">CLOUDWATCH_METRIC</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.HealthCheckType.RECOVERY_CONTROL">RECOVERY_CONTROL</a></code> | *No description.* |

---

##### `HTTP` <a name="HTTP" id="@pepperize/cdk-route53-health-check.HealthCheckType.HTTP"></a>

---


##### `HTTPS` <a name="HTTPS" id="@pepperize/cdk-route53-health-check.HealthCheckType.HTTPS"></a>

---


##### `HTTP_STR_MATCH` <a name="HTTP_STR_MATCH" id="@pepperize/cdk-route53-health-check.HealthCheckType.HTTP_STR_MATCH"></a>

---


##### `HTTPS_STR_MATCH` <a name="HTTPS_STR_MATCH" id="@pepperize/cdk-route53-health-check.HealthCheckType.HTTPS_STR_MATCH"></a>

---


##### `TCP` <a name="TCP" id="@pepperize/cdk-route53-health-check.HealthCheckType.TCP"></a>

---


##### `CALCULATED` <a name="CALCULATED" id="@pepperize/cdk-route53-health-check.HealthCheckType.CALCULATED"></a>

---


##### `CLOUDWATCH_METRIC` <a name="CLOUDWATCH_METRIC" id="@pepperize/cdk-route53-health-check.HealthCheckType.CLOUDWATCH_METRIC"></a>

---


##### `RECOVERY_CONTROL` <a name="RECOVERY_CONTROL" id="@pepperize/cdk-route53-health-check.HealthCheckType.RECOVERY_CONTROL"></a>

---


### InsufficientDataHealthStatus <a name="InsufficientDataHealthStatus" id="@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.HEALTHY">HEALTHY</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.UNHEALTHY">UNHEALTHY</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.LAST_KNOWN_STATUS">LAST_KNOWN_STATUS</a></code> | *No description.* |

---

##### `HEALTHY` <a name="HEALTHY" id="@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.HEALTHY"></a>

---


##### `UNHEALTHY` <a name="UNHEALTHY" id="@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.UNHEALTHY"></a>

---


##### `LAST_KNOWN_STATUS` <a name="LAST_KNOWN_STATUS" id="@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.LAST_KNOWN_STATUS"></a>

---


### Protocol <a name="Protocol" id="@pepperize/cdk-route53-health-check.Protocol"></a>

The protocol that Route53 uses to communicate with the endpoint.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.Protocol.HTTP">HTTP</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.Protocol.HTTPS">HTTPS</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.Protocol.TCP">TCP</a></code> | *No description.* |

---

##### `HTTP` <a name="HTTP" id="@pepperize/cdk-route53-health-check.Protocol.HTTP"></a>

---


##### `HTTPS` <a name="HTTPS" id="@pepperize/cdk-route53-health-check.Protocol.HTTPS"></a>

---


##### `TCP` <a name="TCP" id="@pepperize/cdk-route53-health-check.Protocol.TCP"></a>

---

