// src/core/theming/DefaultTheme.ts
import { Theme } from './ThemeTypes';

export const DefaultTheme: Theme = {
    name: 'Default',
    colors: {
        background: '#ffffff',
        primary: '#007bff',
        secondary: '#6c757d',
        text: '#333333',
        gridLines: '#e9ecef',
    },
    font: {
        family: 'Arial, sans-serif',
        size: '14px',
        weight: 'normal',
    },
    animations: {
        enabled: true,
        duration: 500,
    },
};
