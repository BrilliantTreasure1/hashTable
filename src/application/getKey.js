// src/application/getKey.js

/**
 * Use-case: Get a value by key from the HashTable.
 *
 * @param {HashTable} hashTable - An instance of HashTable (from domain).
 * @param {string} key - The key to look up.
 * @returns {Object} An object containing the value, index, and bucket.
 */
function getKey(hashTable, key) {
    if (!key) {
      throw new Error('Key is required');
    }
  
    const index = hashTable.hash(key);
    const value = hashTable.get(key);
    const bucket = hashTable.getBucket(key);
  
    return { value, index, bucket };
  }
  
  module.exports = getKey;
  