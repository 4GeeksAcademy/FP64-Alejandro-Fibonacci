function fibo(n){
    return new Array(n).fill(0).reduce((arr, _ ,i) => {
        arr.push((i <= 1) ? i : arr[i-2] + arr[i-1])
        return arr
    },[]) ;
  }
  console.log(fibo(10));
  