function translatePigLatin(str) {
  let vowelArr = ['a', 'e', 'i', 'o', 'u']

  if (vowelArr.indexOf(str[0]) >= 0) {
    str = str.concat('way')
  } else {
    str = str.split('')
    let firstLetter = ''
    while (vowelArr.indexOf(str[0]) < 0) {
      firstLetter = firstLetter.concat(str.shift())
    }

    str = str.concat(firstLetter + 'ay').join('')
  }

  console.log(str)
  return str
}

translatePigLatin('california')
translatePigLatin('paragraphs')
translatePigLatin('glove')
translatePigLatin('algorithm')
translatePigLatin('eight')
translatePigLatin('schwartz')
translatePigLatin('rhythm')
//above is my own code and it works at first and return some error that
//says because of "while loop";
//below is freeCodeCamp's code

/*
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
*/
