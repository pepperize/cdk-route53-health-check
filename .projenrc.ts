import { AwsCdkConstructLibrary } from "@pepperize/projen-awscdk-construct";
import { javascript } from "projen";
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.46.0",
  name: "@pepperize/cdk-route53-health-check",
  description: "Create Route53 health checks",
  keywords: ["AWS", "CDK", "Route53", "health-check", "CloudWatch", "Utilities"],
  repositoryUrl: "https://github.com/pepperize/cdk-route53-health-check.git",

  projenrcTs: true,

  devDeps: ["@pepperize/projen-awscdk-construct@latest"],

  defaultReleaseBranch: "main",
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.Route53HealthCheck",
  },
  publishToPypi: {
    distName: "pepperize.cdk-route53-health-check",
    module: "pepperize_cdk_route53_health_check",
  },
  publishToMaven: {
    mavenEndpoint: "https://s01.oss.sonatype.org",
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-route53-health-check",
    javaPackage: "com.pepperize.cdk.route53_health_check",
  },

  gitpod: true,
});

project.gitignore.exclude("cdk.out/");

project.gitpod?.addCustomTask({
  name: "setup",
  init: "yarn install && npx projen build",
  command: "npx projen watch",
});

project.gitpod?.addVscodeExtensions("dbaeumer.vscode-eslint");

project.synth();
