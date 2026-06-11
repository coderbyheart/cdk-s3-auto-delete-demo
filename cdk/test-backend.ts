import { TestApp } from "./TestApp.ts";

const stackName =
  process.env.STACK_NAME ?? "s3-auto-delete-fails-to-delete-stack-test";

new TestApp({ stackName });
