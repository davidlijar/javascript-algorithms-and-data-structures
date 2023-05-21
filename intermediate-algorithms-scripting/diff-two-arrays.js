function diffArray(arr1, arr2) {
  const newArr = []

  for (let i = 0; i < arr2.length; i++) {
    let isInclu = arr1.indexOf(arr2[i])
    if (isInclu == -1) {
      newArr.push(arr2[i])
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    let isInclu = arr2.indexOf(arr1[i])
    if (isInclu == -1) {
      newArr.push(arr1[i])
    }
  }

  console.log(newArr)
  return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5, 5, 6, 7, 8])
