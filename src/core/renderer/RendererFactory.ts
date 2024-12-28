// src/core/renderer/RendererFactory.ts
import { Renderer } from './Renderer';

export class RendererFactory {
    private static rendererMap: Map<string, () => Renderer> = new Map();

    static registerRenderer(type: string, createRenderer: () => Renderer): void {
        if (this.rendererMap.has(type)) {
            throw new Error(`Renderer for type "${type}" is already registered.`);
        }
        this.rendererMap.set(type, createRenderer);
    }

    static createRenderer(type: string): Renderer {
        const createRenderer = this.rendererMap.get(type);
        if (!createRenderer) {
            throw new Error(`Renderer for type "${type}" is not registered.`);
        }
        return createRenderer();
    }
}