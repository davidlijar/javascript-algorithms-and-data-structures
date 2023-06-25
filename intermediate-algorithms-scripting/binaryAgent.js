//Binary Agents
function binaryAgent(str) {
  let chArr = str.split(' ')
  let ascii = new Array()
  let strArr = new Array()
  //change binary into ascii code
  for (let i = 0; i < chArr.length; i++) {
    let codeOfcurrent = 0
    for (let j = 0; j < 8; j++) {
      codeOfcurrent += parseInt(chArr[i][j]) * 2 ** (7 - j)
    }
    ascii.push(codeOfcurrent)
  }
  //change ascii code to character
  for (let i = 0; i < ascii.length; i++) {
    let cha = String.fromCharCode(ascii[i])
    strArr.push(cha)
  }
  let res = strArr.join('')
  console.log(res)
  return res
}
binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111',
)
binaryAgent(
  '01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001',
)
