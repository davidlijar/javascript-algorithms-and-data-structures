function fearNotLetter(str) {
  let missingLetter = ''

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i + 1].charCodeAt(0) - str[i].charCodeAt(0) > 1) {
      let missingAscii = str[i].charCodeAt(0) + 1
      missingLetter = String.fromCharCode(missingAscii)
      console.log('Missing Letter : ', missingLetter)
      return missingLetter
    } else {
      missingLetter = undefined
    }
  }
}

fearNotLetter('abce')
fearNotLetter('abcdefghjklmno')
fearNotLetter('stvwx')
fearNotLetter('bcdf')
fearNotLetter('abcdefghijklmnopqrstuvwxyz')
