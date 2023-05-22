function destroyer(arr, ...removeItem) {
  let firstArr = arr.map((item) => ({
    itemName: item,
  }))

  for (let i = 0; i < removeItem.length; i++) {
    firstArr = firstArr.filter((item) => item.itemName != removeItem[i])
  }

  for (let i = 0; i < firstArr.length; i++) {
    firstArr[i] = firstArr[i].itemName
  }

  console.log(firstArr)
  return firstArr
}

destroyer(['apple', 'orange', 'banana'], 'apple')
destroyer([1, 2, 3, 4, 5, 1, 2, 3], 1, 2)
