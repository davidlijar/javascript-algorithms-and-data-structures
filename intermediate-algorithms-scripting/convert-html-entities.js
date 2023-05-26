function convertHTML(str) {
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '&':
        str[i] = '&amp;'
        break
      case '<':
        str[i] = '&lt;'
        break
      case '>':
        str[i] = '&gt;'
        break
      case '"':
        str[i] = '&quot;'
        break
      case "'":
        str[i] = '&apos;'
        break
    }
  }

  str = str.join('')
  console.log(str)
  return str
}

convertHTML('Dolce & Gabbana')
convertHTML('Hamburgers < Pizza < Tacos')
convertHTML('Sixty > twelve')
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List")
convertHTML('<>')
convertHTML('abc')
