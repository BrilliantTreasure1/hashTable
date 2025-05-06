// src/interfaces/cli/index.js

import readline from 'node:readline';
import { HashTable } from '../../domain/HashTable.js';
import { ConsoleLogger } from '../../infrastructure/ConsoleLogger.js';
import { setKey } from '../../application/setKey.js';
import { getKey } from '../../application/getKey.js';
import { removeKey } from '../../application/removeKey.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'hash-table> '
});

const logger = new ConsoleLogger();
const hashTable = new HashTable(42, logger);

console.log('🔧 Welcome to the Hash Table CLI');
console.log('🔹 Commands: set <key> <value> | get <key> | remove <key> | exit');
rl.prompt();

rl.on('line', (line) => {
  const [cmd, key, value] = line.trim().split(' ');

  try {
    switch (cmd) {
      case 'set':
        if (key && value) {
          setKey(hashTable, key, value);
        } else {
          console.log('❗ Usage: set <key> <value>');
        }
        break;

      case 'get':
        if (key) {
          const result = getKey(hashTable, key);
          if (result.value !== undefined) {
            console.log(`🔍 Found: ${key} = ${JSON.stringify(result.value)}`);
          } else {
            console.log(`❌ ${key} not found`);
          }
        } else {
          console.log('❗ Usage: get <key>');
        }
        break;

      case 'remove':
        if (key) {
          const removed = removeKey(hashTable, key);
          if (removed) {
            console.log(`🧹 Removed '${key}'`);
          } else {
            console.log(`❌ Key '${key}' not found`);
          }
        } else {
          console.log('❗ Usage: remove <key>');
        }
        break;

      case 'exit':
        rl.close();
        return;

      default:
        console.log('❗ Unknown command');
    }
  } catch (error) {
    console.error(`💥 Error: ${error.message}`);
  }

  rl.prompt();
}).on('close', () => {
  console.log('\n👋 Exiting Hash Table CLI');
  process.exit(0);
});
