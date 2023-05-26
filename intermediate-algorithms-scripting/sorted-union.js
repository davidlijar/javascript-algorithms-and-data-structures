function uniteUnique(...arr) {
  let resultArr = [].concat(...arr)

  for (let i = 0; i < resultArr.length; i++) {
    for (let j = i + 1; j < resultArr.length; j++) {
      if (resultArr[i] == resultArr[j]) {
        resultArr.splice(j, 1)
      }
    }
  }

  console.log(resultArr)
  return resultArr
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
uniteUnique([1, 2, 3], [5, 2, 1])
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
uniteUnique([1, 3, 2], [5, 4], [5, 6])
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])
