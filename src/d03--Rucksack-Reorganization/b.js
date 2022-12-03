const fsInput = require('./input.js')

const charToPriority = char => {
  const charCode = char.charCodeAt(0)
  if(charCode <= 90) return charCode-38
  return charCode-96
}
const fn = (input) => {
  const badges = []
  for (let index = 0; index < input.length; index+=3) {
    const r1 = input[index].split('')
    const r2 = input[index+1].split('')
    const r3 = input[index+2].split('')
    
    const same = r1.find(ss => r2.includes(ss) && r3.includes(ss))
    badges.push(same)
  }
  return badges.map(charToPriority).reduce((acc,val)=>acc+val,0)
}
console.log(fn(fsInput))

module.exports = fn
