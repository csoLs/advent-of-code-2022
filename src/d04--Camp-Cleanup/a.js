const fsInput = require('./input.js')

const fn = (input) => {
  return  input.reduce((contained, pair) => {
    const [p1,p2] = pair.split(',').map(a => a.split('-').map(b => parseInt(b,10)))

    if(
      (p1[0] >= p2[0] && p1[1] <= p2[1]) ||
      (p2[0] >= p1[0] && p2[1] <= p1[1])
    ) {
      return contained + 1
    }

    return contained
  }, 0)
}
console.log(fn(fsInput))

module.exports = fn
