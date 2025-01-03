import inquirer from "inquirer";
import fs from "fs/promises";
import path from "path";

const PLUGIN_TYPES = ["data source", "renderer", "chart"];

export async function createPlugin() {
  // Use inquirer to gather user input
  const answers = await inquirer.prompt([
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
  const pluginsPath = path.join(process.cwd(), "src/plugins");

  // Create the plugin directory structure
  await fs.mkdir(pluginsPath, { recursive: true });

  const pluginPath = path.join(pluginsPath, normalizedPluginName);

  // Create the plugin directory structure
  await fs.mkdir(pluginPath, { recursive: true });

  // Generate boilerplate files
  generatePluginFiles(pluginPath, {
    pluginName,
    pluginType,
    pluginDescription,
    author,
  });

  console.log(`Plugin "${pluginName}" created successfully at ${pluginPath}`);
}

function generatePluginFiles(pluginPath, options) {
  const { pluginName, pluginType, pluginDescription, author } = options;

  const indexContent = `
  import { Plugin } from '../../core/plugin/Plugin';
  
  export const ${capitalize(pluginName)}Plugin: Plugin = {
      id: '${pluginName.toLowerCase()}',
      name: '${pluginName}',
      version: '1.0.0',
      initialize(core) {
          console.log('Initializing ${pluginName} plugin for ${pluginType}');
          core.registerPlugin(this);
      },
      destroy() {
          console.log('${pluginName} plugin destroyed');
      },
  };
  `;

  const metadataContent = {
    name: pluginName,
    type: pluginType,
    description: pluginDescription,
    author,
    version: "1.0.0",
    created_at: new Date().toISOString(),
  };

  // Write files
  fs.writeFile(path.join(pluginPath, "index.ts"), indexContent.trim());
  fs.writeFile(
    path.join(pluginPath, "plugin.json"),
    JSON.stringify(metadataContent, null, 2)
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
