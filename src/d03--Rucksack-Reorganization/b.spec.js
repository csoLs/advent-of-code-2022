/* eslint-env jest */

const fn = require('./b.js')

const testCases = [{
  name: 'basic',
  input: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`.split('\n'),
  expected: 70
}]

console.log('d03--Rucksack-Reorganization b')
testCases.forEach(tc => {
  console.log(`should handle ${tc.name} test`)
  console.log(fn(tc.input), tc.expected)
})
