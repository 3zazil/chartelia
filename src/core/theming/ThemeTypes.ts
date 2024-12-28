// src/core/theming/ThemeTypes.ts

export interface Theme {
    name: string;
    colors: {
        background: string;
        primary: string;
        secondary: string;
        text: string;
        gridLines: string;
    };
    font: {
        family: string;
        size: string;
        weight: string;
    };
    animations: {
        enabled: boolean;
        duration: number; // milliseconds
    };
}
