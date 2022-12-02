const data = require('./input.js')

const map = new Map([
  ['A', {name: 'Rock', win: 'Paper', lose: 'Scissors', draw: 'Rock'}],
  ['B', {name: 'Paper', win: 'Scissors', lose: 'Rock', draw: 'Paper'}],
  ['C', {name: 'Scissors', win: 'Rock', lose: 'Paper', draw: 'Scissors'}],
  ['X', {option:'lose',points:0}],
  ['Y', {option:'draw',points:3}],
  ['Z', {option:'win',points:6}],
  ['Rock', 1],
  ['Paper', 2],
  ['Scissors', 3]
])

const parseResult = raw => {
  const input = raw.split('\n').map(game => {
    const [opponent, selection] = game.split(' ')
    const a = map.get(opponent)
    const b = map.get(selection)
    const c = map.get(a[b.option])

    return b.points + c
  });

  return input.reduce((acc,val) => acc+val,0);
}

console.log(parseResult(data))

module.exports = parseResult
