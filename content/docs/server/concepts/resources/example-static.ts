import { Muppet } from "muppet";

const mcp = new Muppet();

mcp.resource({
  uri: "https://lorem.ipsum",
  name: "static-todo-list",
  mimeType: "text/plain",
}, () => {
  return {
    contents: [
      {
        uri: "task1",
        text: "This is static task",
      },
    ],
  };
});
