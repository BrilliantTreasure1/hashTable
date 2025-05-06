// src/ports/LoggerPort.js
export class LoggerPort {
    log(message) {
      throw new Error('LoggerPort.log(message) must be implemented by an adapter');
    }
  }
  