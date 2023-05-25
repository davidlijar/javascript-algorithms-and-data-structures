function pairElement(str) {
  let resultArr = []

  for (let i = 0; i < str.length; i++) {
    let tempArr = []

    switch (str[i]) {
      case 'G':
        tempArr.push('G', 'C')
        resultArr.push(tempArr)
        break
      case 'C':
        tempArr.push('C', 'G')
        resultArr.push(tempArr)
        break
      case 'A':
        tempArr.push('A', 'T')
        resultArr.push(tempArr)
        break
      case 'T':
        tempArr.push('T', 'A')
        resultArr.push(tempArr)
        break
    }
  }

  console.log(resultArr)
  return resultArr
}

pairElement('GCGAT')
pairElement('GCG')
pairElement('ATGT')
pairElement('CTACG')
