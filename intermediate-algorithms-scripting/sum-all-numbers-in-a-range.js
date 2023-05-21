function sumAll(arr) {
  let sorted = arr.sort((a, b) => {
    return a - b
  })
  let sum = 0

  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    sum += i
  }

  console.log(sum)
  return sum
}

sumAll([12, 3])
