// src/App.ts

import { Core } from './core/Core';

export class Chartelia {
    private core: Core;

    constructor(containerId: string) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Container with ID "${containerId}" not found.`);
        }

        // Initialize core
        this.core = new Core();
    }

    public getCore(): Core {
        return this.core;
    }
}
