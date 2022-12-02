const data = require('./input.js')

const countCalories = raw => {
  const input = raw.split('\n').reduce((acc, val) => {
    if(val !== '') {
      const newInt = parseInt(val, 10)
      const newArr = [...acc]
      newArr[newArr.length-1] += newInt
      return newArr
    }
    return [...acc, 0]
  }, [0]);
  return input;
}

const getMaxCalories = raw => {
  const sum = countCalories(raw)

  return sum.sort((a,b) => b-a)[0]
}

console.log(getMaxCalories(data))

module.exports = getMaxCalories
