// src/core/renderer/Renderer.ts
export interface Renderer {
    initialize(container: HTMLElement): void;
    render(data: any, config: any): void;
    destroy(): void;
}
