const fsInput = require('./input.js')

const charToPriority = char => {
  const charCode = char.charCodeAt(0)
  if(charCode <= 90) return charCode-38
  return charCode-96
}
const fn = (input) => {
  const priomap = input.map(s => {
    const rutsack = s.split('')
    const middle = Math.ceil(rutsack.length/2)
    const p1 = rutsack.splice(0,middle)
    const p2 = rutsack.splice(-middle)
    
    const same = p1.find(ss => p2.includes(ss))
    return charToPriority(same)
  })
  return priomap.reduce((acc,val)=>acc+val,0)
}
console.log(fn(fsInput))

module.exports = fn
