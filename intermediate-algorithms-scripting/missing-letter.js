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

//above is my code
//below is freeCodeCamp's code
/*
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    // code of current character 
    const charCode = str.charCodeAt(i);

    / if code of current character is not equal to first character + no of iteration
    //  then a letter was skipped 
    if (charCode !== str.charCodeAt(0) + i) {
      // if current character skipped past a character find previous character and return/
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");
*/
