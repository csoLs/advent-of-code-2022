const fsInput = require('./input.js')

const fn = (input) => {
  let blueprintRaw = []
  let instructionsRaw = []
  let cols = undefined

  input.forEach(row => {
    if(row.startsWith('move')) {
      instructionsRaw.push(row)
    } else if(row.includes('[')) {
      blueprintRaw.push(row)
    } else if(row.trim() !== '') {
      const trimmed = row.trim()
      cols = parseInt(trimmed[trimmed.length-1],10)
    }
  })

  if(!cols) return null
  const blueprint = []
  const instructions = instructionsRaw.map(s => {
    const matches = s.match(/( \d+)/g)

    return matches.map(s => parseInt(s.trim(),10))
  })
  for (let index = 0; index < cols; index++) {
    blueprint.push([])

    blueprintRaw.map((b, i) => {
      const charAtCol = b.charAt(index*4 +1).trim()
      if(charAtCol) {
        blueprint[index].push(charAtCol)
      }
    })    
  }

  const redo = [...blueprint]

  instructions.map(([count,from,to]) => {
    const newFrom = [...redo[from-1].slice(count)]
    const newTo = [...redo[from-1].slice(0,count).reverse(), ...redo[to-1]]

    redo[from-1] = newFrom
    redo[to-1] = newTo
  })

  return redo.reduce((acc,val) => `${acc}${val[0]}`, '')
}
console.log(fn(fsInput)) //TLNGFGMFN

module.exports = fn
