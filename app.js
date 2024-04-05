function getFibonacciSequence(length) {
    return new Array(length).fill(0).reduce((fibonacci, _, index) => {
      const nextFibonacci = (index <= 1) ? index : fibonacci[index - 2] + fibonacci[index - 1];
      fibonacci.push(nextFibonacci);
      return fibonacci;
    }, []).slice(0, length);
  }
  
  function getFibonacciNumbers(n) {
    return getFibonacciSequence(n);
  }
  
  function printFibonacciNumbers(n){
    const fibonacciNumbers = getFibonacciNumbers(n);
    console.log(fibonacciNumbers);
  }
  
  printFibonacciNumbers(10);
  