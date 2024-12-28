// src/core/interaction/InteractionManager.ts

import { EventEmitter } from "../event/EventEmitter";

export class InteractionManager {
  private eventEmitter: EventEmitter;

  constructor(eventEmitter: EventEmitter) {
    this.eventEmitter = eventEmitter;
  }

  /**
   * Emits an interaction event, allowing plugins to listen for it.
   * @param event The name of the event.
   * @param payload The data associated with the event.
   */
  emitInteractionEvent(event: string, payload: any): void {
    this.eventEmitter.emit(event, payload);
  }

  /**
   * Registers a listener for an interaction event.
   * @param event The name of the event.
   * @param listener A callback function to handle the event.
   */
  onInteractionEvent(event: string, listener: (...args: any[]) => void): void {
    this.eventEmitter.on(event, listener);
  }

  /**
   * Removes a listener for an interaction event.
   * @param event The name of the event.
   * @param listener The callback function to remove.
   */
  offInteractionEvent(event: string, listener: (...args: any[]) => void): void {
    this.eventEmitter.off(event, listener);
  }

  /**
   * Utility for normalizing mouse coordinates within a container.
   * @param container The HTML element containing the interaction area.
   * @param event The mouse event.
   * @returns The normalized coordinates relative to the container.
   */
  static normalizeMouseCoordinates(
    container: HTMLElement,
    event: MouseEvent
  ): { x: number; y: number } {
    const rect = container.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  /**
   * Utility for checking if a point is within a bounding box.
   * @param point The point to check {x, y}.
   * @param bbox The bounding box {x, y, width, height}.
   * @returns True if the point is inside the bounding box.
   */
  static isPointInBoundingBox(
    point: { x: number; y: number },
    bbox: { x: number; y: number; width: number; height: number }
  ): boolean {
    return (
      point.x >= bbox.x &&
      point.x <= bbox.x + bbox.width &&
      point.y >= bbox.y &&
      point.y <= bbox.y + bbox.height
    );
  }
}
