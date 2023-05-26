function sumFibs(num) {
  let tempArr = []
  let sum = 0

  for (let i = 0; i <= num; i++) {
    tempArr[i] = i
  }

  for (let i = 2; i <= num; i++) {
    if (tempArr[i] <= num) {
      tempArr[i] = tempArr[i - 1] + tempArr[i - 2]
    }
  }

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] <= num && tempArr[i] % 2 != 0) {
      sum += tempArr[i]
    }
  }

  console.log(sum)
  return sum
}

sumFibs(1)
sumFibs(1000)
sumFibs(4000000)
sumFibs(4)
sumFibs(75024)
sumFibs(75025)
