import { RemovalPolicy } from "aws-cdk-lib";
import { Bucket, ObjectOwnership } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class TestBucket extends Construct {
  public readonly bucket: Bucket;

  constructor(scope: Construct) {
    super(scope, TestBucket.name);

    this.bucket = new Bucket(this, TestBucket.name, {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error.html",
      publicReadAccess: true,
      blockPublicAccess: {
        blockPublicAcls: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
        blockPublicPolicy: false,
      },
      objectOwnership: ObjectOwnership.BUCKET_OWNER_ENFORCED,
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });
  }
}
