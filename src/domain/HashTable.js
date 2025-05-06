export class HashTable {
  constructor(size = 42, logger) {
    this.buckets = new Array(size);
    this.logger = logger;
  }

  hash(key) {
    return key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.buckets.length;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const existing = this.buckets[index].find(item => item[0] === key);

    if (existing) {
      this.logger.log(`🔁 Key '${key}' already exists. Updating its value.`);
      existing[1] = value;
    } else {
      if (this.buckets[index].length > 0) {
        this.logger.log(`⚠️ Collision detected at index ${index}`);
      }
      this.buckets[index].push([key, value]);
      this.logger.log(`✅ Inserted '${key}' at index ${index}`);
    }

    this.logger.log(`📦 Current bucket: ${JSON.stringify(this.buckets[index])}`);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      const found = bucket.find(item => item[0] === key);
      return found ? found[1] : undefined;
    }
    return undefined;
  }

  getBucket(key) {
    const index = this.hash(key);
    return this.buckets[index];
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      this.buckets[index] = bucket.filter(item => item[0] !== key);
      this.logger.log(`🧹 Removed '${key}' from index ${index}`);
    }
  }
}
