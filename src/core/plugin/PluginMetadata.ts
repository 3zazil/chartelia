// src/core/plugin/PluginRegistry.ts

export interface PluginMetadata {
    id: string;
    name: string;
    version: string;
    description?: string;
    dependencies?: string[]; // List of required plugin IDs
    createInstance(): Plugin;
}
