import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Muppet } from "muppet";

const app = new Muppet({
  name: "My Muppet",
  version: "1.0.0",
});

// Define your tools, prompts, and resources here
// ...

app.connect(new StdioServerTransport());
