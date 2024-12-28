#!/usr/bin/env node

import fs from "fs";
import path from "path";
import inquirer from 'inquirer';

const { prompt } = inquirer;

const PLUGIN_TYPES = ["data source", "renderer", "chart"];

async function createPlugin() {
  const answers = await prompt([
    {
      type: "input",
      name: "pluginName",
      message: "What is the name of your plugin?",
      validate: (input) => !!input || "Plugin name is required",
    },
    {
      type: "list",
      name: "pluginType",
      message: "What type of plugin is this?",
      choices: PLUGIN_TYPES,
    },
    {
      type: "input",
      name: "pluginDescription",
      message: "Provide a short description of the plugin:",
    },
    {
      type: "input",
      name: "author",
      message: "Who is the author of this plugin?",
      default: "Anonymous",
    },
  ]);

  const { pluginName, pluginType, pluginDescription, author } = answers;

  // Normalize plugin name
  const normalizedPluginName = pluginName.toLowerCase().replace(/\s+/g, "-");
  const pluginPath = path.join(
    process.cwd(),
    `plugins/${normalizedPluginName}`
  );

  // Create the plugin directory structure
  fs.mkdirSync(pluginPath, { recursive: true });

  // Generate boilerplate files
  generatePluginFiles(pluginPath, {
    pluginName,
    pluginType,
    pluginDescription,
    author,
  });

  console.log(`Plugin "${pluginName}" created successfully at ${pluginPath}`);
}

function generatePluginFiles(pluginPath: string, options: any) {
  const { pluginName, pluginType, pluginDescription, author } = options;

  const indexContent = `
import { Plugin } from '../src/core/plugin/Plugin';

export const ${capitalize(pluginName)}Plugin: Plugin = {
    id: '${pluginName.toLowerCase()}',
    name: '${pluginName}',
    version: '1.0.0',
    initialize(core) {
        console.log('Initializing ${pluginName} plugin for ${pluginType}');
    },
    destroy() {
        console.log('${pluginName} plugin destroyed');
    },
};
`;

  const readmeContent = `
# ${pluginName}

**Type**: ${pluginType}

**Description**: ${pluginDescription}

**Author**: ${author}
`;

  // Write files
  fs.writeFileSync(path.join(pluginPath, "index.ts"), indexContent.trim());
  fs.writeFileSync(path.join(pluginPath, "README.md"), readmeContent.trim());
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Run the CLI tool
createPlugin();
