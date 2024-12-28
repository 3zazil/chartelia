// src/core/plugin/CompatibilityChecker.ts

import semver from 'semver'; // Use a semantic versioning library for version checks
import { CORE_VERSION } from '../constants';
import { PluginMetadata } from './PluginMetadata';

export class CompatibilityChecker {
    /**
     * Checks if a plugin is compatible with the current core version.
     * @param pluginMetadata The metadata of the plugin.
     * @returns True if the plugin is compatible, otherwise false.
     */
    static isCompatible(pluginMetadata: PluginMetadata): boolean {
        if (!pluginMetadata.version) {
            console.warn(`Plugin ${pluginMetadata.id} does not specify a version.`);
            return false;
        }

        // Example: Assuming pluginMetadata.version specifies a semver range like ">=1.0.0 <2.0.0"
        const isCompatible = semver.satisfies(CORE_VERSION, pluginMetadata.version);
        if (!isCompatible) {
            console.error(
                `Plugin ${pluginMetadata.id} (version: ${pluginMetadata.version}) is not compatible with Core version ${CORE_VERSION}.`
            );
        }

        return isCompatible;
    }

    /**
     * Validates a plugin’s dependencies.
     * @param pluginMetadata The metadata of the plugin.
     * @param availablePlugins A list of currently registered plugins.
     * @returns True if all dependencies are satisfied, otherwise false.
     */
    static areDependenciesSatisfied(
        pluginMetadata: PluginMetadata,
        availablePlugins: PluginMetadata[]
    ): boolean {
        if (!pluginMetadata.dependencies || pluginMetadata.dependencies.length === 0) {
            return true; // No dependencies to validate
        }

        const missingDependencies = pluginMetadata.dependencies.filter((dep) =>
            !availablePlugins.some((plugin) => plugin.id === dep)
        );

        if (missingDependencies.length > 0) {
            console.error(
                `Plugin ${pluginMetadata.id} is missing dependencies: ${missingDependencies.join(
                    ', '
                )}`
            );
            return false;
        }

        return true;
    }

    /**
     * Validates a plugin for both compatibility and dependency satisfaction.
     * @param pluginMetadata The metadata of the plugin.
     * @param availablePlugins A list of currently registered plugins.
     * @returns True if the plugin is fully valid, otherwise false.
     */
    static validatePlugin(
        pluginMetadata: PluginMetadata,
        availablePlugins: PluginMetadata[]
    ): boolean {
        const isCompatible = this.isCompatible(pluginMetadata);
        const dependenciesSatisfied = this.areDependenciesSatisfied(pluginMetadata, availablePlugins);
        return isCompatible && dependenciesSatisfied;
    }
}
