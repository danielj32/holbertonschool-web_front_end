function countPrimeNumbers() {
  for (let ct = 2; ct <= 100; ct++) {
    if (test_print(ct)) {
      console.log(ct);
    }
  }
}

function test_print(number) {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (var x = 2; x < number; x++) {
      if (number % x === 0) {
        return false;
      }
    }
    return true;
  }
}
var tZero = performance.now();
countPrimeNumbers();
var tSecond = performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${tZero - tSecond} milliseconds.`
);
