function twoSum(nums, target) {
    const map = new Map();
    console.log(`🎯 Target: ${target}`);
    console.log(`🔢 Numbers: ${nums.join(', ')}`);
    console.log('----------------------------------');
  
    for (let i = 0; i < nums.length; i++) {
      const current = nums[i];
      const complement = target - current;
  
      console.log(`🔍 Step ${i + 1}:`);
      console.log(`   ➤ Current number: ${current} (index ${i})`);
      console.log(`   ➤ Looking for: ${complement} (target - current)`);
  
      if (map.has(complement)) {
        console.log(`✅ Found! ${complement} was seen before at index ${map.get(complement)}`);
        console.log(`👉 Returning: [${map.get(complement)}, ${i}]`);
        return [map.get(complement), i];
      }
  
      console.log(`📌 ${complement} not found, saving ${current} in map`);
      map.set(current, i);
      console.log(`🗺️ Map state:`, Object.fromEntries(map));
      console.log('----------------------------------');
    }
  
    console.log('❌ No valid pair found');
    return [];
  }
  
  // 🧪 تست نمونه
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  console.log(`\n🎉 Result: [${result}]`);
  