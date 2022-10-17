# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlarmHealthCheck <a name="AlarmHealthCheck" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck"></a>

- *Implements:* <a href="#@pepperize/cdk-route53-health-check.IHealthCheck">IHealthCheck</a>, aws-cdk-lib.ITaggable

Create a Route53 HealthCheck that monitors a CloudWatch Alarm.

<b>Example</b>
```typescript
const alarm new Alarm(stack, "Alarm", {
   // ...
});
new AlarmHealthCheck(stack, "HealthCheck", {
   alarm: alarm,
});
```

> [https://docs.aws.amazon.com/de_de/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#aws-resource-route53-healthcheck-properties](https://docs.aws.amazon.com/de_de/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#aws-resource-route53-healthcheck-properties)

#### Initializers <a name="Initializers" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.Initializer"></a>

```typescript
import { AlarmHealthCheck } from '@pepperize/cdk-route53-health-check'

new AlarmHealthCheck(scope: Construct, id: string, props: AlarmHealthCheckProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheckProps">AlarmHealthCheckProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheckProps">AlarmHealthCheckProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.failover">failover</a></code> | Sets `this.healthCheckId` as the value for `HealthCheckId` on the given RecordSet. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.failoverPrimary">failoverPrimary</a></code> | Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.failoverSecondary">failoverSecondary</a></code> | Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.metric">metric</a></code> | Return the given named metric for this HealthCheck. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.metricHealthCheckStatus">metricHealthCheckStatus</a></code> | Route53 health checkers report that the HealthCheck is healthy or unhealthy. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `failover` <a name="failover" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.failover"></a>

```typescript
public failover(recordSet: RecordSet, evaluateTargetHealth?: boolean, failover?: Failover): void
```

Sets `this.healthCheckId` as the value for `HealthCheckId` on the given RecordSet.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.failover.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.failover.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

---

###### `failover`<sup>Optional</sup> <a name="failover" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.failover.parameter.failover"></a>

- *Type:* <a href="#@pepperize/cdk-route53-health-check.Failover">Failover</a>

---

##### `failoverPrimary` <a name="failoverPrimary" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.failoverPrimary"></a>

```typescript
public failoverPrimary(recordSet: RecordSet, evaluateTargetHealth?: boolean): void
```

Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.failoverPrimary.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.failoverPrimary.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

---

##### `failoverSecondary` <a name="failoverSecondary" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.failoverSecondary"></a>

```typescript
public failoverSecondary(recordSet: RecordSet, evaluateTargetHealth?: boolean): void
```

Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.failoverSecondary.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.failoverSecondary.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

---

##### `metric` <a name="metric" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this HealthCheck.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHealthCheckStatus` <a name="metricHealthCheckStatus" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.metricHealthCheckStatus"></a>

```typescript
public metricHealthCheckStatus(props?: MetricOptions): Metric
```

Route53 health checkers report that the HealthCheck is healthy or unhealthy.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.metricHealthCheckStatus.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.fromHealthCheckId">fromHealthCheckId</a></code> | Import an existing Route53 HealthCheck. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.isConstruct"></a>

```typescript
import { AlarmHealthCheck } from '@pepperize/cdk-route53-health-check'

AlarmHealthCheck.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.isOwnedResource"></a>

```typescript
import { AlarmHealthCheck } from '@pepperize/cdk-route53-health-check'

AlarmHealthCheck.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.isResource"></a>

```typescript
import { AlarmHealthCheck } from '@pepperize/cdk-route53-health-check'

AlarmHealthCheck.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromHealthCheckId` <a name="fromHealthCheckId" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.fromHealthCheckId"></a>

```typescript
import { AlarmHealthCheck } from '@pepperize/cdk-route53-health-check'

AlarmHealthCheck.fromHealthCheckId(scope: Construct, id: string, healthCheckId: string)
```

Import an existing Route53 HealthCheck.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.fromHealthCheckId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.fromHealthCheckId.parameter.id"></a>

- *Type:* string

---

###### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.fromHealthCheckId.parameter.healthCheckId"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | TagManager to set, remove and format tags. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@pepperize/cdk-route53-health-check.AlarmHealthCheck.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

TagManager to set, remove and format tags.

---


### CalculatedHealthCheck <a name="CalculatedHealthCheck" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck"></a>

- *Implements:* <a href="#@pepperize/cdk-route53-health-check.IHealthCheck">IHealthCheck</a>, aws-cdk-lib.ITaggable

Create a Route53 HealthCheck that monitors other Route53 HealthChecks.

<b>Example</b>
```typescript
const healthCheck = new EndpointHealthCheck(stack, "HealthCheck", {
   domainName: "pepperize.com",
});
new CalculatedHealthCheck(stack, "CalculatedHealthCheck", {
   childHealthChecks: [healthCheck],
});
```

> [https://docs.aws.amazon.com/de_de/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#aws-resource-route53-healthcheck-properties](https://docs.aws.amazon.com/de_de/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#aws-resource-route53-healthcheck-properties)

#### Initializers <a name="Initializers" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.Initializer"></a>

```typescript
import { CalculatedHealthCheck } from '@pepperize/cdk-route53-health-check'

new CalculatedHealthCheck(scope: Construct, id: string, props: CalculatedHealthCheckProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps">CalculatedHealthCheckProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps">CalculatedHealthCheckProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.addChildHealthCheck">addChildHealthCheck</a></code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failover">failover</a></code> | Sets `this.healthCheckId` as the value for `HealthCheckId` on the given RecordSet. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failoverPrimary">failoverPrimary</a></code> | Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failoverSecondary">failoverSecondary</a></code> | Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.metric">metric</a></code> | Return the given named metric for this HealthCheck. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.metricChildHealthCheckHealthyCount">metricChildHealthCheckHealthyCount</a></code> | The number of ChildHealthChecks that are healthy that Route53 is monitoring. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.metricHealthCheckStatus">metricHealthCheckStatus</a></code> | Route53 health checkers report that the HealthCheck is healthy or unhealthy. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addChildHealthCheck` <a name="addChildHealthCheck" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.addChildHealthCheck"></a>

```typescript
public addChildHealthCheck(healthCheck: IHealthCheck): void
```

###### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.addChildHealthCheck.parameter.healthCheck"></a>

- *Type:* <a href="#@pepperize/cdk-route53-health-check.IHealthCheck">IHealthCheck</a>

---

##### `failover` <a name="failover" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failover"></a>

```typescript
public failover(recordSet: RecordSet, evaluateTargetHealth?: boolean, failover?: Failover): void
```

Sets `this.healthCheckId` as the value for `HealthCheckId` on the given RecordSet.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failover.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failover.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

---

###### `failover`<sup>Optional</sup> <a name="failover" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failover.parameter.failover"></a>

- *Type:* <a href="#@pepperize/cdk-route53-health-check.Failover">Failover</a>

---

##### `failoverPrimary` <a name="failoverPrimary" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failoverPrimary"></a>

```typescript
public failoverPrimary(recordSet: RecordSet, evaluateTargetHealth?: boolean): void
```

Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failoverPrimary.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failoverPrimary.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

---

##### `failoverSecondary` <a name="failoverSecondary" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failoverSecondary"></a>

```typescript
public failoverSecondary(recordSet: RecordSet, evaluateTargetHealth?: boolean): void
```

Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failoverSecondary.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.failoverSecondary.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

---

##### `metric` <a name="metric" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this HealthCheck.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricChildHealthCheckHealthyCount` <a name="metricChildHealthCheckHealthyCount" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.metricChildHealthCheckHealthyCount"></a>

```typescript
public metricChildHealthCheckHealthyCount(props?: MetricOptions): Metric
```

The number of ChildHealthChecks that are healthy that Route53 is monitoring.

Valid statistics: Average (recommended), Minimum, Maximum

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.metricChildHealthCheckHealthyCount.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHealthCheckStatus` <a name="metricHealthCheckStatus" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.metricHealthCheckStatus"></a>

```typescript
public metricHealthCheckStatus(props?: MetricOptions): Metric
```

Route53 health checkers report that the HealthCheck is healthy or unhealthy.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.metricHealthCheckStatus.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.fromHealthCheckId">fromHealthCheckId</a></code> | Import an existing Route53 HealthCheck. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.isConstruct"></a>

```typescript
import { CalculatedHealthCheck } from '@pepperize/cdk-route53-health-check'

CalculatedHealthCheck.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.isOwnedResource"></a>

```typescript
import { CalculatedHealthCheck } from '@pepperize/cdk-route53-health-check'

CalculatedHealthCheck.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.isResource"></a>

```typescript
import { CalculatedHealthCheck } from '@pepperize/cdk-route53-health-check'

CalculatedHealthCheck.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromHealthCheckId` <a name="fromHealthCheckId" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.fromHealthCheckId"></a>

```typescript
import { CalculatedHealthCheck } from '@pepperize/cdk-route53-health-check'

CalculatedHealthCheck.fromHealthCheckId(scope: Construct, id: string, healthCheckId: string)
```

Import an existing Route53 HealthCheck.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.fromHealthCheckId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.fromHealthCheckId.parameter.id"></a>

- *Type:* string

---

###### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.fromHealthCheckId.parameter.healthCheckId"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | TagManager to set, remove and format tags. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheck.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

TagManager to set, remove and format tags.

---


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
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.failover">failover</a></code> | Sets `this.healthCheckId` as the value for `HealthCheckId` on the given RecordSet. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.failoverPrimary">failoverPrimary</a></code> | Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.failoverSecondary">failoverSecondary</a></code> | Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.metric">metric</a></code> | Return the given named metric for this HealthCheck. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricConnectionTime">metricConnectionTime</a></code> | The time in milliseconds that it took Route53 health checkers to establish a TCP connection with the endpoint. |
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

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `failover` <a name="failover" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.failover"></a>

```typescript
public failover(recordSet: RecordSet, evaluateTargetHealth?: boolean, failover?: Failover): void
```

Sets `this.healthCheckId` as the value for `HealthCheckId` on the given RecordSet.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.failover.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.failover.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

---

###### `failover`<sup>Optional</sup> <a name="failover" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.failover.parameter.failover"></a>

- *Type:* <a href="#@pepperize/cdk-route53-health-check.Failover">Failover</a>

---

##### `failoverPrimary` <a name="failoverPrimary" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.failoverPrimary"></a>

```typescript
public failoverPrimary(recordSet: RecordSet, evaluateTargetHealth?: boolean): void
```

Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.failoverPrimary.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.failoverPrimary.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

---

##### `failoverSecondary` <a name="failoverSecondary" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.failoverSecondary"></a>

```typescript
public failoverSecondary(recordSet: RecordSet, evaluateTargetHealth?: boolean): void
```

Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.failoverSecondary.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.failoverSecondary.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

---

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

##### `metricConnectionTime` <a name="metricConnectionTime" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricConnectionTime"></a>

```typescript
public metricConnectionTime(props?: MetricOptions): Metric
```

The time in milliseconds that it took Route53 health checkers to establish a TCP connection with the endpoint.

Valid statistics: Average (recommended), Minimum, Maximum

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricConnectionTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHealthCheckPercentageHealthy` <a name="metricHealthCheckPercentageHealthy" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricHealthCheckPercentageHealthy"></a>

```typescript
public metricHealthCheckPercentageHealthy(props?: MetricOptions): Metric
```

The percentage of Route53 health checkers that report that the status of the health check is healthy.

<b>LatencyGraphs has to be enabled</b>

Valid statistics: Average (recommended), Minimum, Maximum

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

Valid statistics: Average, Minimum, Maximum

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricSSLHandshakeTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTimeToFirstByte` <a name="metricTimeToFirstByte" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricTimeToFirstByte"></a>

```typescript
public metricTimeToFirstByte(props?: MetricOptions): Metric
```

The time in milliseconds that it took Route53 health checkers to receive the first byte of the response to an HTTP or HTTPS request.

Valid statistics: Average (recommended), Minimum, Maximum

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.metricTimeToFirstByte.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.fromHealthCheckId">fromHealthCheckId</a></code> | Import an existing Route53 HealthCheck. |

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

##### `isOwnedResource` <a name="isOwnedResource" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.isOwnedResource"></a>

```typescript
import { EndpointHealthCheck } from '@pepperize/cdk-route53-health-check'

EndpointHealthCheck.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.isResource"></a>

```typescript
import { EndpointHealthCheck } from '@pepperize/cdk-route53-health-check'

EndpointHealthCheck.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromHealthCheckId` <a name="fromHealthCheckId" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.fromHealthCheckId"></a>

```typescript
import { EndpointHealthCheck } from '@pepperize/cdk-route53-health-check'

EndpointHealthCheck.fromHealthCheckId(scope: Construct, id: string, healthCheckId: string)
```

Import an existing Route53 HealthCheck.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.fromHealthCheckId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.fromHealthCheckId.parameter.id"></a>

- *Type:* string

---

###### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.fromHealthCheckId.parameter.healthCheckId"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
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

##### `env`<sup>Required</sup> <a name="env" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@pepperize/cdk-route53-health-check.EndpointHealthCheck.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

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

### AlarmHealthCheckProps <a name="AlarmHealthCheckProps" id="@pepperize/cdk-route53-health-check.AlarmHealthCheckProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-route53-health-check.AlarmHealthCheckProps.Initializer"></a>

```typescript
import { AlarmHealthCheckProps } from '@pepperize/cdk-route53-health-check'

const alarmHealthCheckProps: AlarmHealthCheckProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheckProps.property.alarm">alarm</a></code> | <code>aws-cdk-lib.aws_cloudwatch.IAlarm</code> | The alarm that Route53 monitors. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheckProps.property.healthCheckName">healthCheckName</a></code> | <code>string</code> | The display name of this Route53 HealthCheck. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheckProps.property.insufficientDataHealthStatus">insufficientDataHealthStatus</a></code> | <code><a href="#@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus">InsufficientDataHealthStatus</a></code> | The status to assign to the HealthCheck when CloudWatch has insufficient data about the metric. |
| <code><a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheckProps.property.inverted">inverted</a></code> | <code>boolean</code> | Whether to invert the status of the Route53 health check status. |

---

##### `alarm`<sup>Required</sup> <a name="alarm" id="@pepperize/cdk-route53-health-check.AlarmHealthCheckProps.property.alarm"></a>

```typescript
public readonly alarm: IAlarm;
```

- *Type:* aws-cdk-lib.aws_cloudwatch.IAlarm

The alarm that Route53 monitors.

---

##### `healthCheckName`<sup>Optional</sup> <a name="healthCheckName" id="@pepperize/cdk-route53-health-check.AlarmHealthCheckProps.property.healthCheckName"></a>

```typescript
public readonly healthCheckName: string;
```

- *Type:* string

The display name of this Route53 HealthCheck.

---

##### `insufficientDataHealthStatus`<sup>Optional</sup> <a name="insufficientDataHealthStatus" id="@pepperize/cdk-route53-health-check.AlarmHealthCheckProps.property.insufficientDataHealthStatus"></a>

```typescript
public readonly insufficientDataHealthStatus: InsufficientDataHealthStatus;
```

- *Type:* <a href="#@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus">InsufficientDataHealthStatus</a>

The status to assign to the HealthCheck when CloudWatch has insufficient data about the metric.

---

##### `inverted`<sup>Optional</sup> <a name="inverted" id="@pepperize/cdk-route53-health-check.AlarmHealthCheckProps.property.inverted"></a>

```typescript
public readonly inverted: boolean;
```

- *Type:* boolean

Whether to invert the status of the Route53 health check status.

---

### CalculatedHealthCheckProps <a name="CalculatedHealthCheckProps" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps.Initializer"></a>

```typescript
import { CalculatedHealthCheckProps } from '@pepperize/cdk-route53-health-check'

const calculatedHealthCheckProps: CalculatedHealthCheckProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps.property.childHealthChecks">childHealthChecks</a></code> | <code><a href="#@pepperize/cdk-route53-health-check.IHealthCheck">IHealthCheck</a>[]</code> | The list of HealthCheck that monitors other Route53 HealthChecks. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps.property.healthCheckName">healthCheckName</a></code> | <code>string</code> | The display name of this Route53 HealthCheck. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps.property.healthThreshold">healthThreshold</a></code> | <code>number</code> | The number of child HealthChecks that Amazon Route53 must consider healthy. |
| <code><a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps.property.inverted">inverted</a></code> | <code>boolean</code> | Whether to invert the status of the Route53 health check status. |

---

##### `childHealthChecks`<sup>Optional</sup> <a name="childHealthChecks" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps.property.childHealthChecks"></a>

```typescript
public readonly childHealthChecks: IHealthCheck[];
```

- *Type:* <a href="#@pepperize/cdk-route53-health-check.IHealthCheck">IHealthCheck</a>[]

The list of HealthCheck that monitors other Route53 HealthChecks.

---

##### `healthCheckName`<sup>Optional</sup> <a name="healthCheckName" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps.property.healthCheckName"></a>

```typescript
public readonly healthCheckName: string;
```

- *Type:* string

The display name of this Route53 HealthCheck.

---

##### `healthThreshold`<sup>Optional</sup> <a name="healthThreshold" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps.property.healthThreshold"></a>

```typescript
public readonly healthThreshold: number;
```

- *Type:* number

The number of child HealthChecks that Amazon Route53 must consider healthy.

---

##### `inverted`<sup>Optional</sup> <a name="inverted" id="@pepperize/cdk-route53-health-check.CalculatedHealthCheckProps.property.inverted"></a>

```typescript
public readonly inverted: boolean;
```

- *Type:* boolean

Whether to invert the status of the Route53 health check status.

---

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

<b>An IP address must be specified if protocol TCP</b>

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

- *Implemented By:* <a href="#@pepperize/cdk-route53-health-check.AlarmHealthCheck">AlarmHealthCheck</a>, <a href="#@pepperize/cdk-route53-health-check.CalculatedHealthCheck">CalculatedHealthCheck</a>, <a href="#@pepperize/cdk-route53-health-check.EndpointHealthCheck">EndpointHealthCheck</a>, <a href="#@pepperize/cdk-route53-health-check.IHealthCheck">IHealthCheck</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.IHealthCheck.failover">failover</a></code> | Sets `this.healthCheckId` as the value for `HealthCheckId` on the given RecordSet. |
| <code><a href="#@pepperize/cdk-route53-health-check.IHealthCheck.failoverPrimary">failoverPrimary</a></code> | Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`. |
| <code><a href="#@pepperize/cdk-route53-health-check.IHealthCheck.failoverSecondary">failoverSecondary</a></code> | Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`. |
| <code><a href="#@pepperize/cdk-route53-health-check.IHealthCheck.metric">metric</a></code> | Return the given named metric for this HealthCheck. |
| <code><a href="#@pepperize/cdk-route53-health-check.IHealthCheck.metricHealthCheckStatus">metricHealthCheckStatus</a></code> | Route53 health checkers report that the HealthCheck is healthy or unhealthy. |

---

##### `failover` <a name="failover" id="@pepperize/cdk-route53-health-check.IHealthCheck.failover"></a>

```typescript
public failover(recordSet: RecordSet, evaluateTargetHealth?: boolean, failover?: Failover): void
```

Sets `this.healthCheckId` as the value for `HealthCheckId` on the given RecordSet.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html#cfn-route53-aliastarget-evaluatetargethealth](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html#cfn-route53-aliastarget-evaluatetargethealth)

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.IHealthCheck.failover.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

The Route53 RecordSet to configure failover.

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.IHealthCheck.failover.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

Inherit the health of the referenced Alias RecordSet Target.

---

###### `failover`<sup>Optional</sup> <a name="failover" id="@pepperize/cdk-route53-health-check.IHealthCheck.failover.parameter.failover"></a>

- *Type:* <a href="#@pepperize/cdk-route53-health-check.Failover">Failover</a>

Sets `PRIMARY` or `SECONDARY` as the value for `Failover` on the given RecordSet.

---

##### `failoverPrimary` <a name="failoverPrimary" id="@pepperize/cdk-route53-health-check.IHealthCheck.failoverPrimary"></a>

```typescript
public failoverPrimary(recordSet: RecordSet, evaluateTargetHealth?: boolean): void
```

Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html#cfn-route53-aliastarget-evaluatetargethealth](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html#cfn-route53-aliastarget-evaluatetargethealth)

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.IHealthCheck.failoverPrimary.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

The Route53 RecordSet to configure failover.

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.IHealthCheck.failoverPrimary.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

Inherit the health of the referenced Alias RecordSet Target.

---

##### `failoverSecondary` <a name="failoverSecondary" id="@pepperize/cdk-route53-health-check.IHealthCheck.failoverSecondary"></a>

```typescript
public failoverSecondary(recordSet: RecordSet, evaluateTargetHealth?: boolean): void
```

Sets `PRIMARY` as the value for `Failover` on the given RecordSet. Additionally, sets `this.healthCheckId` as the value for `HealthCheckId`.

<b>Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets</b>

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html#cfn-route53-aliastarget-evaluatetargethealth](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html#cfn-route53-aliastarget-evaluatetargethealth)

###### `recordSet`<sup>Required</sup> <a name="recordSet" id="@pepperize/cdk-route53-health-check.IHealthCheck.failoverSecondary.parameter.recordSet"></a>

- *Type:* aws-cdk-lib.aws_route53.RecordSet

The Route53 RecordSet to configure failover.

---

###### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@pepperize/cdk-route53-health-check.IHealthCheck.failoverSecondary.parameter.evaluateTargetHealth"></a>

- *Type:* boolean

Inherit the health of the referenced Alias RecordSet Target.

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

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.IHealthCheck.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | *No description.* |

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@pepperize/cdk-route53-health-check.IHealthCheck.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

---

## Enums <a name="Enums" id="Enums"></a>

### Failover <a name="Failover" id="@pepperize/cdk-route53-health-check.Failover"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.Failover.PRIMARY">PRIMARY</a></code> | The primary record set. |
| <code><a href="#@pepperize/cdk-route53-health-check.Failover.SECONDARY">SECONDARY</a></code> | The secondary record set. |

---

##### `PRIMARY` <a name="PRIMARY" id="@pepperize/cdk-route53-health-check.Failover.PRIMARY"></a>

The primary record set.

---


##### `SECONDARY` <a name="SECONDARY" id="@pepperize/cdk-route53-health-check.Failover.SECONDARY"></a>

The secondary record set.

---


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


### InsufficientDataHealthStatus <a name="InsufficientDataHealthStatus" id="@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.HEALTHY">HEALTHY</a></code> | Route53 considers the health check to be healthy. |
| <code><a href="#@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.UNHEALTHY">UNHEALTHY</a></code> | Route53 considers the health check to be unhealthy. |
| <code><a href="#@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.LAST_KNOWN_STATUS">LAST_KNOWN_STATUS</a></code> | Route53 uses the status of the health check from the last time that CloudWatch had sufficient data to determine the alarm state, otherwise healthy. |

---

##### `HEALTHY` <a name="HEALTHY" id="@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.HEALTHY"></a>

Route53 considers the health check to be healthy.

---


##### `UNHEALTHY` <a name="UNHEALTHY" id="@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.UNHEALTHY"></a>

Route53 considers the health check to be unhealthy.

---


##### `LAST_KNOWN_STATUS` <a name="LAST_KNOWN_STATUS" id="@pepperize/cdk-route53-health-check.InsufficientDataHealthStatus.LAST_KNOWN_STATUS"></a>

Route53 uses the status of the health check from the last time that CloudWatch had sufficient data to determine the alarm state, otherwise healthy.

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

