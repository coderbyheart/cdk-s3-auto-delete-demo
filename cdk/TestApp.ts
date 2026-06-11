import { App } from "aws-cdk-lib";
import { TestResourcesStack } from "./TestResourcesStack.ts";

export class TestApp extends App {
  constructor({ stackName }: { stackName: string }) {
    super();
    new TestResourcesStack(this, stackName);
  }
}
