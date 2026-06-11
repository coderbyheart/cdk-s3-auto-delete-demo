#!/usr/bin/env bash
set -euo pipefail

# Writes a dummy file to the S3 bucket created by the CDK stack.
# Resolves the bucket name from the stack's `bucketName` CloudFormation output.

STACK_NAME="${STACK_NAME:-s3-auto-delete-fails-to-delete-stack-test}"

bucket_name="$(aws cloudformation describe-stacks \
  --stack-name "$STACK_NAME" \
  --query "Stacks[0].Outputs[?OutputKey=='bucketName'].OutputValue" \
  --output text)"

if [ -z "$bucket_name" ] || [ "$bucket_name" = "None" ]; then
  echo "Could not find 'bucketName' output on stack '$STACK_NAME'." >&2
  exit 1
fi

echo "Writing dummy file to bucket: $bucket_name"

tmp_file="$(mktemp)"
trap 'rm -f "$tmp_file"' EXIT
echo "dummy content $(date -u +%Y-%m-%dT%H:%M:%SZ)" > "$tmp_file"

aws s3 cp "$tmp_file" "s3://${bucket_name}/dummy.txt"

echo "Done: s3://${bucket_name}/dummy.txt"
