import { LogLevel } from "./LogLevel";

export class Logger {
  private static level: LogLevel = LogLevel.INFO; // Default log level
  private static output: (message: string) => void = console.log; // Default output is console.log

  /**
   * Sets the log level.
   * @param level The log level to set.
   */
  static setLogLevel(level: LogLevel): void {
    this.level = level;
  }

  /**
   * Sets the output handler for logs.
   * @param handler A function to handle log messages (e.g., console.log, server API).
   */
  static setOutputHandler(handler: (message: string) => void): void {
    this.output = handler;
  }

  /**
   * Logs a DEBUG message.
   */
  static debug(message: string, context?: any): void {
    if (this.level <= LogLevel.DEBUG) {
      this.log("DEBUG", message, context);
    }
  }

  /**
   * Logs an INFO message.
   */
  static info(message: string, context?: any): void {
    if (this.level <= LogLevel.INFO) {
      this.log("INFO", message, context);
    }
  }

  /**
   * Logs a WARN message.
   */
  static warn(message: string, context?: any): void {
    if (this.level <= LogLevel.WARN) {
      this.log("WARN", message, context);
    }
  }

  /**
   * Logs an ERROR message.
   */
  static error(message: string, context?: any): void {
    if (this.level <= LogLevel.ERROR) {
      this.log("ERROR", message, context);
    }
  }

  /**
   * Internal method to handle the logging.
   * @param level The log level as a string.
   * @param message The log message.
   * @param context Optional additional context.
   */
  private static log(level: string, message: string, context?: any): void {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    this.output(logMessage);

    if (context) {
      this.output(JSON.stringify(context, null, 2)); // Pretty-print context if provided
    }
  }
}
