// src/application/setKey.js

/**
 * Use-case: Set a key-value pair in the HashTable.
 * 
 * @param {HashTable} hashTable - An instance of HashTable (from domain).
 * @param {string} key - The key to set.
 * @param {string} value - The value to associate with the key.
 */
function setKey(hashTable, key, value) {
    if (!key || !value) {
      throw new Error('Key and value are required');
    }
  
    hashTable.set(key, value);
  }
  
  module.exports = setKey;
  