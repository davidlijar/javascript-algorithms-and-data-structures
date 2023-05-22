function spinalCase(str) {
  let regex = /[A-Z][a-z]+|[a-z]+/g;
  let strArr = str.match(regex);

  strArr = strArr.map(item => item.toLowerCase());
  strArr = strArr.join("-");
  console.log(strArr);
  return strArr;
}

spinalCase('AllThe-small Things');