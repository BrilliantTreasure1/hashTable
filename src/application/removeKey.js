// src/application/removeKey.js

/**
 * Use-case: Remove a key from the HashTable.
 *
 * @param {HashTable} hashTable - An instance of HashTable (from domain).
 * @param {string} key - The key to remove.
 * @returns {boolean} Whether the key was removed or not.
 */
function removeKey(hashTable, key) {
    if (!key) {
      throw new Error('Key is required');
    }
  
    const value = hashTable.get(key);
    if (value === undefined) {
      return false;
    }
  
    hashTable.remove(key);
    return true;
  }
  
  module.exports = removeKey;
  