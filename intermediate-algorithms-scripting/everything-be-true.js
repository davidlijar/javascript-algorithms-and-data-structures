function truthCheck(collection, pre) {
  let state = false,
    count = 0
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
      count++
    }
  }
  if (count == collection.length) {
    state = true
  }
  console.log(state)
  return state
}
truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: false },
    { name: 'Camperbot', role: 'Bot', isBot: true },
  ],
  'isBot',
)
truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: false },
    { name: 'Camperbot', role: 'Bot', isBot: true },
  ],
  'name',
)
truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: false },
    { name: 'Camperbot', role: 'Bot', isBot: true },
  ],
  'role',
)
truthCheck(
  [
    { name: 'Pikachu', number: 25, caught: 3 },
    { name: 'Togepi', number: 175, caught: 1 },
  ],
  'number',
)
truthCheck(
  [
    { name: 'Pikachu', number: 25, caught: 3 },
    { name: 'Togepi', number: 175, caught: 1 },
    { name: 'MissingNo', number: NaN, caught: 0 },
  ],
  'caught',
)
truthCheck(
  [
    { name: 'Pikachu', number: 25, caught: 3 },
    { name: 'Togepi', number: 175, caught: 1 },
    { name: 'MissingNo', number: NaN, caught: 0 },
  ],
  'number',
)
truthCheck(
  [
    { name: 'Quincy', username: 'QuincyLarson' },
    { name: 'Naomi', username: 'nhcarrigan' },
    { name: 'Camperbot' },
  ],
  'username',
)
truthCheck(
  [
    { name: 'freeCodeCamp', users: [{ name: 'Quincy' }, { name: 'Naomi' }] },
    { name: 'Code Radio', users: [{ name: 'Camperbot' }] },
    { name: '', users: [] },
  ],
  'users',
)
truthCheck(
  [
    { id: 1, data: { url: 'https://freecodecamp.org', name: 'freeCodeCamp' } },
    {
      id: 2,
      data: { url: 'https://coderadio.freecodecamp.org/', name: 'CodeRadio' },
    },
    { id: null, data: {} },
  ],
  'data',
)
truthCheck(
  [
    { id: 1, data: { url: 'https://freecodecamp.org', name: 'freeCodeCamp' } },
    {
      id: 2,
      data: { url: 'https://coderadio.freecodecamp.org/', name: 'CodeRadio' },
    },
    { id: null, data: {} },
  ],
  'id',
)
