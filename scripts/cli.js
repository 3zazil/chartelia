import { Command } from "commander";
import { createPlugin } from "./commands/create-plugin.js";

const program = new Command();

program
  .command("create-plugin")
  .description("Create a new plugin")
  .action(createPlugin);

program.parse(process.argv);
