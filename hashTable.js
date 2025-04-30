const readline = require('readline');

// کلاس HashTable
class HashTable {
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
      console.log(`🔁 Key '${key}' already exists. Updating its value.`);
      existing[1] = value;
    } else {
      if (this.buckets[index].length > 0) {
        console.log(`⚠️ Collision detected at index ${index}`);
      }
      this.buckets[index].push([key, value]);
      console.log(`✅ Inserted '${key}' at index ${index}`);
    }

    console.log(`📦 Current bucket: ${JSON.stringify(this.buckets[index])}`);
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
      console.log(`🧹 Removed '${key}' from index ${index}`);
    }
  }
}

// رابط کاربری ترمینالی
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'hash-table> '
});

const ht = new HashTable();

console.log('🔧 Welcome to the Hash Table CLI');
console.log('🔹 Available commands: set <key> <value> | get <key> | remove <key> | exit');
rl.prompt();

rl.on('line', (line) => {
  const [cmd, key, value] = line.trim().split(' ');

  switch (cmd) {
    case 'set':
      if (key && value) {
        ht.set(key, value);
      } else {
        console.log('❗ Usage: set <key> <value>');
      }
      break;

    case 'get':
      if (key) {
        const index = ht.hash(key);
        const result = ht.get(key);
        const bucket = ht.getBucket(key);
        if (result !== undefined) {
          console.log(`🔍 Found: ${key} = ${result}`);
          console.log(`📌 Stored at index: ${index}`);
          console.log(`📦 Bucket contents: ${JSON.stringify(bucket)}`);
        } else {
          console.log(`❌ ${key} not found`);
        }
      } else {
        console.log('❗ Usage: get <key>');
      }
      break;

    case 'remove':
      if (key) {
        ht.remove(key);
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

  rl.prompt();
}).on('close', () => {
  console.log('\n👋 Exiting Hash Table CLI');
  process.exit(0);
});
