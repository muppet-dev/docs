import { Muppet } from "muppet";
import { z } from "zod";

const mcp = new Muppet();

mcp.resource({
  uriTemplate: "https://lorem.{ending}",
  name: "dynamic-todo-list",
  mimeType: "text/plain",
  arguments: {
    ending: { validation: z.string() },
  },
}, () => {
  return {
    contents: [
      {
        uri: "task1",
        text: "This is dynamic task",
      },
    ],
  };
});
