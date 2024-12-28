import { Core } from "../Core";

// src/core/plugin/Plugin.ts
export interface Plugin {
    id: string;
    name: string;
    version: string;
    initialize(core: Core): void;
    destroy?(): void;
}
