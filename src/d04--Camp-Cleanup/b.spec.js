/* eslint-env jest */

const fn = require('./b.js')

const testCases = [{
  name: 'basic',
  input: `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`.split('\n'),
  expected: 4
}]

console.log('d03--Rucksack-Reorganization b')
testCases.forEach(tc => {
  console.log(`should handle ${tc.name} test`)
  console.log(fn(tc.input), tc.expected)
})

