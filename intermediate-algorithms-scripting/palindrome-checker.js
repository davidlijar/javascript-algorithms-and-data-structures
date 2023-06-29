function palindrome(str) {
  let pattern = /[a-zA-Z0-9]/g
  let matches = str.toLowerCase().match(pattern)
  let filterStr = matches.join('')
  let reveStr = []

  for (let i = filterStr.length - 1; i >= 0; i--) {
    reveStr.push(filterStr[i])
  }

  reveStr = reveStr.join('')

  //debugging
  //console.log(filterStr);
  //console.log(reveStr);

  if (reveStr == filterStr) {
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}

palindrome('eye')
palindrome('_eye')
palindrome('race car')
palindrome('not a palindrome')
palindrome('A man, a plan, a canal. Panama')
palindrome('never odd or even')
palindrome('nope')
palindrome('almostomla')
palindrome('My age is 0, 0 si ega ym.')
palindrome('1 eye for of 1 eye.')
palindrome('0_0 (: /- :) 0-0')
palindrome('five|_/|four')
