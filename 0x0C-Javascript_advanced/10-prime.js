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
  const tZero = performance.now();
  for (let ct = 0; ct < 100; ct++) {
      countPrimeNumbers();
    }
    const tOne = performance.now();
    console.log(
    `Execution time of calculating prime numbers 100 times was ${
    tOne - tZero
  } milliseconds.`
);
