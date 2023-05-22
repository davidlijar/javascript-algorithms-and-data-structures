function whatIsInAName(collection, source) {
  let result = collection
  let targetProp = Object.keys(source)

  for (let i = 0; i < targetProp.length; i++) {
    let n = targetProp[i]

    result = result.filter((item) => item[n] == source[n])
  }
  console.log(result)
  return result
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { first: 'Tybalt', last: 'Capulet' },
)
