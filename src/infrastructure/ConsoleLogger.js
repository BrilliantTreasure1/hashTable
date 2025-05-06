// src/infrastructure/ConsoleLogger.js
import { LoggerPort } from '../ports/LoggerPort.js';

export class ConsoleLogger extends LoggerPort {
    log(message) {
      console.log(message);
    }
  }

