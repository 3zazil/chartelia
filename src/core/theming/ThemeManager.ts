// src/core/theming/ThemeManager.ts
import { Theme } from "./ThemeTypes";
import { DefaultTheme } from "./DefaultTheme";

export class ThemeManager {
  private activeTheme: Theme = DefaultTheme;
  private customThemes: Map<string, Theme> = new Map();

  /**
   * Retrieves the currently active theme.
   */
  getActiveTheme(): Theme {
    return this.activeTheme;
  }

  /**
   * Sets the active theme. If the theme is not found, falls back to the default theme.
   * @param themeName Name of the theme to activate.
   */
  setActiveTheme(themeName: string): void {
    const theme =
      themeName === DefaultTheme.name
        ? DefaultTheme
        : this.customThemes.get(themeName);

    if (!theme) {
      console.warn(
        `Theme "${themeName}" not found. Falling back to DefaultTheme.`
      );
      this.activeTheme = DefaultTheme;
    } else {
      this.activeTheme = theme;
    }
  }

  /**
   * Adds a custom theme to the library.
   * @param theme Custom theme to register.
   */
  registerCustomTheme(theme: Theme): void {
    if (this.customThemes.has(theme.name)) {
      throw new Error(`Theme "${theme.name}" is already registered.`);
    }
    this.customThemes.set(theme.name, theme);
  }

  /**
   * Lists all available themes, including the default theme.
   * @returns Array of available theme names.
   */
  listAvailableThemes(): string[] {
    return [DefaultTheme.name, ...this.customThemes.keys()];
  }
}
