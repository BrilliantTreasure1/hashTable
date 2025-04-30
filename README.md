# 🔐 Hash Table CLI - Interactive Terminal App

A simple yet powerful implementation of a **Hash Table (Dictionary)** in JavaScript, powered by a **command-line interface**. This tool helps you understand how hashing, collisions, and bucket storage work — in real time.

## 📦 Features

- ⚙️ Custom hash function using character codes
- 📂 Open addressing via bucket arrays
- ✅ Set key-value pairs
- 🔍 Get values along with the internal index (bucket) info
- 🗑️ Remove existing keys
- 🎛️ Fully interactive terminal UI (CLI)

---

## 🚀 Getting Started

### 📥 Clone the Repository

```bash
git clone https://github.com/BrilliantTreasure1/hash-table-cli.git
cd hash-table-cli
🔧 Run the Program
bash
Copy
Edit
node hashTable.js
💻 Available Commands
Command	Description
set <key> <value>	Stores a key-value pair
get <key>	Retrieves the value + bucket index info
remove <key>	Deletes the key from the hash table
exit	Exits the CLI program
🧪 Example Usage
bash
Copy
Edit
hash-table> set name Alice
✅ Set name = Alice

hash-table> get name
🔍 name = Alice, Bucket Index: 18, Bucket: [ [ 'name', 'Alice' ] ]

hash-table> remove name
🗑️ Removed name
🧠 How It Works
The hash function maps strings to integer indexes using the sum of character ASCII codes.

Each index maps to a bucket (an array of key-value pairs) to handle collisions.

The program prints both values and their internal storage index, helping learners understand how hashing works under the hood.

📸 Screenshots
<img src="screenshot.png" alt="Hash Table CLI Preview" width="600" />
📚 Educational Value
This project is perfect for:

📘 CS students learning data structures

🧑‍💻 Devs refreshing hash map concepts

👨‍🏫 Teachers creating live coding demos

🏷️ Tags
#javascript #cli #datastructures #hashtable #terminal #educational #interactive

©️ License
MIT License — Free for learning and open-source use.

