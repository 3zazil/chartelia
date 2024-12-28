// src/core/event/EventBus.ts
import { EventEmitter } from './EventEmitter';

export class EventBus {
    private static instance: EventEmitter | null = null;

    /**
     * Returns the singleton instance of the EventEmitter.
     */
    static getInstance(): EventEmitter {
        if (!this.instance) {
            this.instance = new EventEmitter();
        }
        return this.instance;
    }
}
