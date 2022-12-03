/* eslint-env jest */

const fn = require('./a.js')

const testCases = [{
  name: 'basic',
  input: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`.split('\n'),
  expected: 157
}]

console.log('d03--Rucksack-Reorganization a')
testCases.forEach(tc => {
  console.log(`should handle ${tc.name} test`)
  console.log(fn(tc.input), tc.expected)
})
