use std::collections::HashSet;

pub fn duplicates(nums: Vec<u64>) -> bool {
    let mut set: HashSet<u64> = HashSet::new();
    
    for num in nums {
      if set.contains(&num) {
          return true;
      }
      set.insert(num);
    }
    return false;
    }