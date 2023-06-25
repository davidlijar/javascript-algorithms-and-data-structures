function dropElements(arr, func) {
  let index = 0
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let isTrue = func(arr[i])
    if (isTrue == true) {
      index = i
      res = arr.splice(index)
      break
    }
  }
  console.log(res)
  return res
}
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3
})
dropElements([0, 1, 0, 1], function (n) {
  return n === 1
})
dropElements([1, 2, 3], function (n) {
  return n > 0
})
dropElements([1, 2, 3, 4], function (n) {
  return n > 5
})
dropElements([1, 2, 3, 7, 4], function (n) {
  return n > 3
})
dropElements([1, 2, 3, 9, 2], function (n) {
  return n > 2
})
