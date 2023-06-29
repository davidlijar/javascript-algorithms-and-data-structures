function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];

for(let i=0; i<arr.length; i++){
    const a = 2 * Math.PI;
  const c = Math.pow(earthRadius+arr[i].avgAlt,3);
  const b = Math.sqrt(c/GM);
  const orbitPeriod = Math.round(a*b);

  newArr.push({name:arr[i].name,orbitalPeriod:orbitPeriod});


}
  console.log(newArr)
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);