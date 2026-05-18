// ========== QUESTIONS ==========
// 1. Flatten Array
// 2. Find 2nd Largest Number
// 3. Recursive Flatten without Built-in Methods
// 4. Promise Example
// 5. Async/Await with Event Loop
// 6. Event Loop - Promise Timing
// 7. Flatten Nested Array (Recursive Helper)
// 8. Find Largest Word in a Sentence
// 9. Remove Duplicates from Array (using Set)
// 10. Remove Duplicates from Array (using Loop)
// 11. Reverse a String
// 12. Calculate Factorial
// 13. Merge and Sort Two Arrays
// 14. Check if One Array is Square of Another
// 15. Check if Two Strings are Anagrams
// 16. Remove Duplicate Objects from Array
// 17. Find Maximum Number in Array
// 18. Check if Number is Prime
// 19. Find Largest in Nested Array

// ========== SOLUTIONS ==========

// 1. Flatten Array
const array = [[1,3],[1,5,6],[8,9]];
const filteredArray = [].concat.apply([], array)
console.log(filteredArray) // [1, 3, 1, 5, 6, 8, 9]
const flattenArray = array.flat()
console.log(flattenArray) // [1, 3, 1, 5, 6, 8, 9]

// 2. Find 2nd Largest Number
const largest = [2,3,5,3,7,6,8]
largest.sort((a,b) => b-a)
const secondLargest = largest[1]
console.log(secondLargest) // 7

// 3. Recursive Flatten without Built-in Methods
const arr1 = [1, [2, [3, 4]], 5]
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatten(arr1)) // [1, 2, 3, 4, 5]

// 4. Promise Example
const PromiseData = new Promise((resolve, reject) => {
  const a = 5, b = 5
  if(a == b) resolve("Promise Resolved")
  else reject("Promise Rejected")
})
PromiseData.then((message) => console.log(message))
  .catch((message) => console.log(message))

// 5. Async/Await with Event Loop
const AsyncFunction = async (data) => {
  try {
    console.log("start")
    Promise.resolve().then(() => console.log("Promise resolved"))
    console.log("end")
  } catch (error) {
    console.log(error)
  }
}
AsyncFunction([1,2,3,4,5])

// 6. Event Loop - Promise Timing
console.log("Start")
Promise.resolve().then(() => console.log("Promise resolved"))
console.log("End")

// 7. Flatten Nested Array (Recursive Helper)
function flattenHelper(arr) {
  const result = []
  function helper(a) {
    for (let val of a) {
      if (Array.isArray(val)) helper(val)
      else result.push(val)
    }
  }
  helper(arr)
  return result
}
console.log(flattenHelper([1,[2,[3,[4]]]])) // [1,2,3,4]

// 8. Find Largest Word in a Sentence
function largestWord(str){
  const word = str.split(" ")
  let largest = ""
  for(let i = 0; i < word.length; i++){
    if(word[i].length > largest.length) largest = word[i]
  }
  return largest
}
console.log(largestWord("I love programming in JavaScript")) // "programming"

// 9. Remove Duplicates (using Set)
const nums = [1,2,2,3,4,4,5]
const unique = new Set(nums)
console.log(...unique) // 1 2 3 4 5

// 10. Remove Duplicates (using Loop)
function removeDuplicates(arr) {
  const uniqueArr = []
  for(let i = 0; i < arr.length; i++){
    if(!uniqueArr.includes(arr[i])) uniqueArr.push(arr[i])
  }
  return uniqueArr
}
console.log(removeDuplicates([1,2,2,3,4,4,5])) // [1,2,3,4,5]

// 11. Reverse a String
function reverseString(str) {
  let reversed = ""
  for (let char of str) reversed = char + reversed
  return reversed
}
console.log(reverseString("hello")) // "olleh"

// 12. Calculate Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}
console.log(factorial(5)) // 120

// 13. Merge and Sort Two Arrays
function mergeAndSortArrays(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2]
  mergedArray.sort((a, b) => a - b)
  return mergedArray
}
console.log(mergeAndSortArrays([0,3,4,31], [4,6,30])) // [0,3,4,4,6,30,31]

// 14. Check if One Array is Square of Another
function checkArraySquare(arr1, arr2) {
  const squaredArr1 = arr1.map(num => num * num)
  squaredArr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  for (let i = 0; i < squaredArr1.length; i++) {
    if (squaredArr1[i] !== arr2[i]) return false
  }
  return true
}
console.log(checkArraySquare([1,2,3], [1,4,9])) // true

// 15. Check if Two Strings are Anagrams
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false
  const sortedStr1 = str1.split('').sort().join('')
  const sortedStr2 = str2.split('').sort().join('')
  return sortedStr1 === sortedStr2
}
console.log(areAnagrams("listen", "silent")) // true

// 16. Remove Duplicate Objects from Array
function removeDuplicateObjects(arr) {
  const uniqueObjects = []
  const seen = new Set()
  for (let obj of arr) {
    if (!seen.has(obj.name)) {
      seen.add(obj.name)
      uniqueObjects.push(obj)
    }
  }
  return uniqueObjects
}
console.log(removeDuplicateObjects([{name:"John"}, {name:"Jane"}, {name:"John"}]))

// 17. Find Maximum Number in Array
function findMaxNumber(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  return max
}
console.log(findMaxNumber([3,5,7,2,8,1])) // 8

// 18. Check if Number is Prime
function isPrime(num) {
  if (num <= 1) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}
console.log(isPrime(7)) // true
console.log(isPrime(10)) // false

// 19. Find Largest in Nested Array
function findLargestInNestedArray(arr) {
  const fltten = arr.flat(Infinity)
  return Math.max(...fltten)
}
console.log(findLargestInNestedArray([[3,5,7],[2,8,1,[9,4,6]], [0,11]])) // 11
