import { type App, CfnOutput, Stack } from "aws-cdk-lib";
import { TestBucket } from "./TestBucket.ts";

export class TestResourcesStack extends Stack {
  constructor(parent: App, id: string) {
    super(parent, id, {
      description: `Resources for e2e testing`,
    });

    const testBucket = new TestBucket(this);

    new CfnOutput(this, "bucketName", {
      value: testBucket.bucket.bucketName,
      description: "The name of the JWKs bucket",
      exportName: `${Stack.of(this).stackName}:bucketName`,
    });

    new CfnOutput(this, "bucketURL", {
      value: testBucket.bucket.bucketWebsiteUrl,
      description: "The URL of the JWKs bucket",
      exportName: `${Stack.of(this).stackName}:bucketURL`,
    });
  }
}
