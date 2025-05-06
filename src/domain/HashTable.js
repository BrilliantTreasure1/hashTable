export class HashTable {
  constructor(size = 42) {
    this.buckets = new Array(size);
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
      existing[1] = value;
    } else {
      this.buckets[index].push([key, value]);
    }
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

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      this.buckets[index] = bucket.filter(item => item[0] !== key);
    }
  }

  getBucket(key) {
    const index = this.hash(key);
    return this.buckets[index];
  }
}
