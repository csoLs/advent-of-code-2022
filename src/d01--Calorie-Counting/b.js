const data = require('./input.js')
const { countCalories } = require('./a.js')

const getTop = raw => {
  const sum = countCalories(raw)
  return sum.sort((a,b) => b-a).splice(0,3).reduce((acc,val) => acc+val, 0)
}

console.log(getTop(data))

module.exports = getTop
