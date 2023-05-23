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
