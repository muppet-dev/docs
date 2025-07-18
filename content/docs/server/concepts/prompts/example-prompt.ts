import { Muppet } from "muppet";
import z from "zod";

const mcp = new Muppet();

mcp.prompt({
  name: "Explain like I'm 5",
  description: "A prompt to explain an advance topic to a 5 year old",
  arguments: {
    topic: {
      validation: z.string(),
      completion: () => [
        "quantum physics",
        "machine learning",
        "natural language processing",
        "artificial intelligence",
      ],
    },
  },
}, (c) => {
  const { topic } = c.message.params.arguments;
  return {
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Explain ${topic} to me like I'm five`,
        },
      },
    ],
  };
});
