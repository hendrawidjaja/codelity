// let A = [9, 3, 9, 3, 9, 7, 9, 7, 5];
// O(N) or O(N*log(N))

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length > 0) {
    let sorted_arr = A.slice().sort();
    for (let i = 0; i < sorted_arr.length; i += 2) {
      if (sorted_arr[i] !== sorted_arr[i + 1]) return sorted_arr[i];
    }
  } else return true;
}
