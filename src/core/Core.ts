// src/core/Core.ts
import { PluginManager } from "./plugin/PluginManager";
import { EventEmitter } from "./event/EventEmitter";
import { DataManager } from "./data/DataManager";
import { ThemeManager } from "./theming/ThemeManager";
import { Plugin } from "./plugin/Plugin";
import { ConfigManager } from "./config/ConfigManager";
import { InteractionManager } from "./interaction/InteractionManager";
import { Logger } from "./utils/Logger";

export class Core {
  private pluginManager: PluginManager;
  private eventEmitter: EventEmitter;
  private dataManager: DataManager;
  private themeManager: ThemeManager;
  private configManager: ConfigManager;
  private interactionManager: InteractionManager;
  private logger: Logger;

  constructor() {
    this.pluginManager = new PluginManager(this);
    this.eventEmitter = new EventEmitter();
    this.dataManager = new DataManager();
    this.themeManager = new ThemeManager();
    this.configManager = new ConfigManager();
    this.themeManager = new ThemeManager();
    this.interactionManager = new InteractionManager(this.eventEmitter);
    this.logger = new Logger();
  }

  /**
   * Initializes the core and all its modules.
   */
  initialize(): void {
    console.log("Core initialized");
  }

  /**
   * Registers a plugin with the core.
   */
  registerPlugin(plugin: Plugin): void {
    this.pluginManager.registerPlugin(plugin);
  }

  /**
   * Emits a global event.
   */
  emitEvent(event: string, ...args: any[]): void {
    this.eventEmitter.emit(event, ...args);
  }

  /**
   * Subscribes to a global event.
   */
  onEvent(event: string, listener: (...args: any[]) => void): void {
    this.eventEmitter.on(event, listener);
  }

  /**
   * Fetches data using the DataManager.
   */
  async fetchData(): Promise<any[]> {
    return await this.dataManager.fetchData();
  }

  applyTheme(themeName: string): void {
    this.themeManager.setActiveTheme(themeName);

    const activeTheme = this.themeManager.getActiveTheme();
    console.log(`Active theme applied: ${activeTheme.name}`);

    // TODO: Notify renderers about the theme change (if needed)
  }

  getConfigManager(): ConfigManager {
    return this.configManager;
  }

  getInteractionManager(): InteractionManager {
    return this.interactionManager;
  }

  getLogger(): Logger {
    return this.logger;
  }

}
