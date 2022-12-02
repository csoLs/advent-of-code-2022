const data = require('./input.js')

const map = new Map([
  ['A', {name: 'Rock', win: 'Paper', lose: 'Scissors'}],
  ['B', {name: 'Paper', win: 'Scissors', lose: 'Rock'}],
  ['C', {name: 'Scissors', win: 'Rock', lose: 'Paper'}],
  ['X', {name: 'Rock', win: 'Paper', lose: 'Scissors', point: 1}],
  ['Y', {name: 'Paper', win: 'Scissors', lose: 'Rock', point: 2}],
  ['Z', {name: 'Scissors', win: 'Rock', lose: 'Paper', point: 3}],
])

const parseResult = raw => {
  const input = raw.split('\n').map(game => {
    const [opponent, selection] = game.split(' ')
    const a = map.get(opponent)
    const b = map.get(selection)

    return b.point + (a.name === b.name ? 3 : b.win === a.name ? 6 : 0)
  });

  return input.reduce((acc,val) => acc+val,0);
}

console.log(parseResult(data))

module.exports = parseResult
