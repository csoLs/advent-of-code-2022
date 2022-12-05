/* eslint-env jest */

const fn = require('./a.js')

const testCases = [{
  name: 'basic',
  input: `
    [D]    
[N] [C]    
[Z] [M] [P]
1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`.split('\n'),
  expected: 'CMZ'
}]


console.log('d03--Rucksack-Reorganization a')
testCases.forEach(tc => {
  console.log(`should handle ${tc.name} test`)
  console.log(fn(tc.input), tc.expected)
})
