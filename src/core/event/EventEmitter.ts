type Listener = (...args: any[]) => void;

export class EventEmitter {
    private events: Map<string, Listener[]> = new Map();

    /**
     * Registers a listener for a specific event.
     */
    on(event: string, listener: Listener): void {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event)?.push(listener);
    }

    /**
     * Removes a specific listener for an event.
     */
    off(event: string, listener: Listener): void {
        const listeners = this.events.get(event);
        if (!listeners) return;

        this.events.set(event, listeners.filter((l) => l !== listener));
    }

    /**
     * Emits an event, calling all listeners registered for that event.
     */
    emit(event: string, ...args: any[]): void {
        const listeners = this.events.get(event);
        if (!listeners) return;

        listeners.forEach((listener) => listener(...args));
    }

    /**
     * Removes all listeners for a specific event.
     */
    removeAllListeners(event: string): void {
        this.events.delete(event);
    }
}
