# Demonstration of CDK S3 `autoDeleteObjects` feature

1. Deploy the stack: `npx cdk deploy --require-approval never`
2. Write a file to the bucket: `./write-dummy-file.sh`
3. Delete the stack: `npx cdk destroy -f`
