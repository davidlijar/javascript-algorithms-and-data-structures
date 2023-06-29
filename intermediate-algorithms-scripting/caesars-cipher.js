function rot13(str) {
  str = str.split('')

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 77) {
      let plus = str[i].charCodeAt(0) + 13
      let changeChar = String.fromCharCode(plus)
      str[i] = changeChar
    } else if (str[i].charCodeAt(0) >= 77 && str[i].charCodeAt(0) <= 90) {
      let minus = str[i].charCodeAt(0) - 13
      let changeChar = String.fromCharCode(minus)
      str[i] = changeChar
    }
  }
  console.log(str.join(''))
  return str.join('')
}

rot13('SERR PBQR PNZC')
rot13('SERR CVMMN!')
rot13('SERR YBIR?')
rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')
