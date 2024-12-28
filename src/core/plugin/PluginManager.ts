// src/core/plugin/PluginManager.ts
import { Plugin } from './Plugin';
import { Core } from '../Core';
import { PluginRegistry } from './PluginRegistry';
import { CompatibilityChecker } from './CompatibilityChecker';

export class PluginManager {
    private plugins: Map<string, Plugin> = new Map();
    private core: Core;

    constructor(core: Core) {
        this.core = core;
    }

    /**
     * Registers a new plugin.
     */
    registerPlugin(plugin: Plugin): void {
        const pluginMetadata = PluginRegistry.getPluginMetadata(plugin.id);
        if (!pluginMetadata) {
            throw new Error(`Plugin ${plugin.id} is not registered in the PluginRegistry.`);
        }
    
        const availablePlugins = PluginRegistry.listPlugins();
    
        if (!CompatibilityChecker.validatePlugin(pluginMetadata, availablePlugins)) {
            throw new Error(`Plugin ${plugin.id} failed compatibility or dependency checks.`);
        }
    
        // Proceed with registration if valid
        this.plugins.set(plugin.id, plugin);
        plugin.initialize(this.getCoreInstance());
    }

    /**
     * Unregisters a plugin by ID.
     */
    unregisterPlugin(pluginId: string): void {
        const plugin = this.plugins.get(pluginId);
        if (plugin && plugin.destroy) {
            plugin.destroy();
        }
        this.plugins.delete(pluginId);
    }

    /**
     * Returns the Core instance.
     */
    getCoreInstance(): Core {
        return this.core;
    }
}
