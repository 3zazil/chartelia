// src/core/plugin/PluginRegistry.ts
import { PluginMetadata } from './PluginMetadata';

export class PluginRegistry {
    private static registry: Map<string, PluginMetadata> = new Map();

    /**
     * Registers a plugin with the registry.
     */
    static registerPlugin(metadata: PluginMetadata): void {
        if (this.registry.has(metadata.id)) {
            throw new Error(`Plugin with ID '${metadata.id}' is already registered.`);
        }
        this.registry.set(metadata.id, metadata);
    }

    /**
     * Unregisters a plugin by ID.
     */
    static unregisterPlugin(pluginId: string): void {
        if (!this.registry.has(pluginId)) {
            throw new Error(`Plugin with ID '${pluginId}' is not registered.`);
        }
        this.registry.delete(pluginId);
    }

    /**
     * Retrieves plugin metadata by ID.
     */
    static getPluginMetadata(pluginId: string): PluginMetadata | undefined {
        return this.registry.get(pluginId);
    }

    /**
     * Lists all registered plugins.
     */
    static listPlugins(): PluginMetadata[] {
        return Array.from(this.registry.values());
    }

    /**
     * Checks if a plugin is registered.
     */
    static isPluginRegistered(pluginId: string): boolean {
        return this.registry.has(pluginId);
    }
}
