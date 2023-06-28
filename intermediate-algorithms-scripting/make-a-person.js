const Person = function (firstAndLast) {
  let [first, last] = firstAndLast.split(' ')

  this.getFullName = function () {
    console.log(first + ' ' + last)
    return first + ' ' + last
  }

  this.getFirstName = function () {
    console.log(first)
    return first
  }
  this.getLastName = function () {
    console.log(last)
    return last
  }
  this.setFirstName = function (name) {
    first = name
  }
  this.setLastName = function (name) {
    last = name
  }
  this.setFullName = function (name) {
    ;[first, last] = name.split(' ')
  }
}

const bob = new Person('Bob Ross')
bob.getFullName()
bob.setFirstName('Haskell')
bob.getFullName()
bob.setFullName('Haskell Curry')
bob.getFullName()
bob.getFirstName()
bob.getLastName()
