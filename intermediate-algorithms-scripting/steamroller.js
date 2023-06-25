function steamrollArray(arr) {
  let resultArr = new Array();

  function recur(arr){
    for(let i=0; i<arr.length; i++){
    let isArray = Array.isArray(arr[i]);

    if(!isArray){
      
      resultArr.push(arr[i]);
      
    }else{
      recur(arr[i]);
    }
  }
  }
  recur(arr);

  console.log(resultArr);

  return resultArr;
}

steamrollArray([2,[2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);