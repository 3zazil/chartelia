// src/core/config/ConfigTypes.ts

// Global configuration options
export interface GlobalConfig {
  theme: string; // e.g., 'light', 'dark'
  animation: boolean;
  animationDuration: number; // milliseconds
}

// Renderer-specific configurations
export interface RendererConfig {
  width: number;
  height: number;
  backgroundColor: string;
}

// Chart-specific configurations
export interface ChartConfig {
  title: string;
  showLegend: boolean;
  legendPosition: "top" | "bottom" | "left" | "right";
}
