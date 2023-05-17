function product(nums, out=1, i=0) {
  if (nums.length === i) return out;
  out *= nums[i];
  return product(nums, out, i + 1);
}

function longest(words, out=0, i=0) {
  if (words.length === i) return out;
  let len = words[i].length;
  out = len > out ? len : out;
  return longest(words, out, i + 1);
}

function findIndex(arr, val, i=0) {
  if (arr.length === i) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

// binary search assumes the array is sorted
function binarySearch(arr, val, start=0, end=arr.length-1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) return mid;
  else if (arr[mid] < val) return binarySearch(arr, val, mid+1, end);
  else return binarySearch(arr, val, start, mid-1);
}

function revString(str, out="", i=0) {
  if (str.length === i) return out;
  out = str[i] + out;
  return revString(str, out, i + 1);
}

function isPalindrome(str, i=0) {
  if (str.length / 2 <= i) return true;
  if (str[i] !== str[str.length - 1 - i]) return false;
  return isPalindrome(str, i + 1);
}

function gatherStrings(obj, out=[]) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      out.push(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      out = gatherStrings(obj[key], out);
    }
  }
  return out;
}

function everyOther(str, out="", i=0) {
  if (str.length <= i) return out;
  if (i % 2 === 0) out += str[i];
  return everyOther(str, out, i + 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
