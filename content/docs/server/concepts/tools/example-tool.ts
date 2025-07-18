import { Muppet } from "muppet";
import z from "zod";

const mcp = new Muppet();

mcp.tool({
  name: "hello-world",
  description: "A simple hello world tool",
  inputSchema: z.object({
    name: z.string(),
  }),
}, (c) => {
  const { name } = c.message.params.arguments;
  return {
    content: [
      {
        type: "text",
        text: `Hello ${name}!`,
      },
    ],
  };
});
