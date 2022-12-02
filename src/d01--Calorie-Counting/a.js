const data = require('./input.js')

const countCalories = raw => {
  const res = raw.split('\n\n').map(r => r.split('\n').map(r => parseInt(r,10)))
  return res.map(r => r.reduce((acc,v) => acc+v, 0))
}

const getMaxCalories = raw => {
  const sum = countCalories(raw)
  return sum.sort((a,b) => b-a)[0]
}

console.log(getMaxCalories(data))

module.exports = getMaxCalories
module.exports.countCalories = countCalories
