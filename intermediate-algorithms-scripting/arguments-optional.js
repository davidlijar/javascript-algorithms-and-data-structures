function addTogether() {
  const [first, second] = arguments

  function addSecond(second) {
    if (typeof second === 'number') {
      return first + second
    }
  }

  if (arguments.length === 1) {
    if (typeof first === 'number') {
      return addSecond
    } else {
      return undefined
    }
  }
  if (arguments.length === 2) {
    if (typeof first === 'number') {
      return addSecond(second)
    }
  }
}

addTogether(2, 3)
addTogether(23, 30)
addTogether('2', 3)
addTogether(5, undefined)
addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
addTogether(5)
addTogether(5)(7)
addTogether(2)([3])
addTogether(2, '3')
