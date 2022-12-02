const data = require('./input.js')

const parseResult = raw => {
  const input = raw.split('\n').map(game => {
    const [opponent, selection] = game.split(' ')

    if(opponent === 'A') {
      if(selection === 'X') {
        return 1 + 3
      } else if(selection === 'Y') {
        return 2 + 6
      } else {
        return 3 + 0
      }
    } else if(opponent === 'B') {
      if(selection === 'X') {
        return 1 + 0
      } else if(selection === 'Y') {
        return 2 + 3
      } else {
        return 3 + 6
      }
    } else {
      if(selection === 'X') {
        return 1 + 6
      } else if(selection === 'Y') {
        return 2 + 0
      } else {
        return 3 + 3
      }
    }
  });

  return input.reduce((acc,val) => acc+val,0);
}

console.log(parseResult(data))

module.exports = parseResult
