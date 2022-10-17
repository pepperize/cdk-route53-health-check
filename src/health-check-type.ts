/**
 * The type of health check to create.
 *
 * @internal
 */
export enum HealthCheckType {
  HTTP = "HTTP",
  HTTPS = "HTTPS",
  HTTP_STR_MATCH = "HTTP_STR_MATCH",
  HTTPS_STR_MATCH = "HTTPS_STR_MATCH",
  TCP = "TCP",
  CALCULATED = "CALCULATED",
  CLOUDWATCH_METRIC = "CLOUDWATCH_METRIC",
  RECOVERY_CONTROL = "RECOVERY_CONTROL",
}
