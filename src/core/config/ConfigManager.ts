// src/core/config/ConfigManager.ts
import { DefaultTheme } from "../theming/DefaultTheme";
import { GlobalConfig, RendererConfig, ChartConfig } from "./ConfigTypes";

export class ConfigManager {
  private globalConfig: GlobalConfig = {
    theme: DefaultTheme.name,
    animation: true,
    animationDuration: 500,
  };

  private rendererConfigs: Map<string, RendererConfig> = new Map();
  private chartConfigs: Map<string, ChartConfig> = new Map();

  /**
   * Updates the global configuration.
   * @param config Partial global configuration.
   */
  updateGlobalConfig(config: Partial<GlobalConfig>): void {
    this.globalConfig = { ...this.globalConfig, ...config };
  }

  /**
   * Retrieves the global configuration.
   * @returns The current global configuration.
   */
  getGlobalConfig(): GlobalConfig {
    return this.globalConfig;
  }

  /**
   * Sets a renderer-specific configuration.
   * @param rendererId Unique ID for the renderer.
   * @param config Renderer configuration.
   */
  setRendererConfig(rendererId: string, config: RendererConfig): void {
    this.rendererConfigs.set(rendererId, config);
  }

  /**
   * Retrieves a renderer-specific configuration.
   * @param rendererId Unique ID for the renderer.
   * @returns The renderer configuration, falling back to defaults.
   */
  getRendererConfig(rendererId: string): RendererConfig | undefined {
    return this.rendererConfigs.get(rendererId);
  }

  /**
   * Sets a chart-specific configuration.
   * @param chartId Unique ID for the chart.
   * @param config Chart configuration.
   */
  setChartConfig(chartId: string, config: ChartConfig): void {
    this.chartConfigs.set(chartId, config);
  }

  /**
   * Retrieves a chart-specific configuration.
   * @param chartId Unique ID for the chart.
   * @returns The chart configuration, falling back to defaults.
   */
  getChartConfig(chartId: string): ChartConfig | undefined {
    return this.chartConfigs.get(chartId);
  }

  /**
   * Merges a base configuration with overrides.
   * @param baseConfig The base configuration.
   * @param overrides Overrides to apply.
   * @returns The merged configuration.
   */
  static mergeConfigs<T>(baseConfig: T, overrides: Partial<T>): T {
    return { ...baseConfig, ...overrides };
  }
}
