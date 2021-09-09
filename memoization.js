// Fibbonacci Memoized

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// console.log(fib(2));
// console.log(fib(6));
// console.log(fib(50));

// Normal

const fibs = (n) => {
  if (n <= 2) return 1;

  console.log(fibs(n - 1) + fibs(n - 2));
  return fibs(n - 1) + fibs(n - 2);
};

console.log('>', fibs(6));
