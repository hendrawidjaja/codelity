//Example test:   ([3, 8, 9, 7, 6], 3)
//Example test:   ([0, 0, 0], 1)
//Example test:   ([1, 2, 3, 4], 4)

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (K >= 0 && K <= 100) {
    let temp = [...A];

    while (K > 0) {
      let lastToFirst = temp[temp.length - 1];
      temp.pop();
      temp.unshift(lastToFirst);

      K--;
    }

    return temp;
  }
}
