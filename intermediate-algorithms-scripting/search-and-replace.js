function myReplace(str, before, after) {
  str = str.split(' ')

  if (before[0] == before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1)
  } else {
    after = after[0].toLowerCase() + after.slice(1)
  }

  str.splice(str.indexOf(before), 1, after)

  let result = str.join(' ')
  console.log(result)
  return result
}

myReplace('Let us go to the store', 'store', 'mall')
myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
myReplace('I think we should look up there', 'up', 'Down')
myReplace('This has a spellngi error', 'spellngi', 'spelling')
myReplace('His name is Tom', 'Tom', 'john')
myReplace('Let us get back to more Coding', 'Coding', 'algorithms')

//below is freeCodeCamp's solution code
/*
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
*/
