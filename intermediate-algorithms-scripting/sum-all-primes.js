function sumPrimes(num) {
  let arr = []
  let sum = 0
  let divisorCnt = []
  let resultArr = []

  for (let i = 1; i < num; i++) {
    arr[i - 1] = i + 1
    divisorCnt[i - 1] = 0
  }

  for (let i = 0; i <= arr.length; i++) {
    for (let j = 1; j < num; j++) {
      if (arr[i] % j === 0) {
        divisorCnt[i]++
      }
    }
  }

  for (let i = 0; i < divisorCnt.length; i++) {
    if (divisorCnt[i] < 3) {
      let add = arr.slice(i, i + 1)
      resultArr.push(...add)
    }
  }

  for (let i = 0; i < resultArr.length; i++) {
    sum += resultArr[i]
  }

  console.log(sum)
  return sum
}

sumPrimes(10)
sumPrimes(977)
