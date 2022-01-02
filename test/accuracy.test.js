// my library
import det from '../index.js'

// well-known library
import rdet from 'robust-determinant'

import _ from 'lodash' // to get random array

const dim = process.argv[2] || 2
const iteration = process.argv[3] || 5
const minVal = process.argv[4] || 0
const maxVal = process.argv[5] || 100

let matching = 0
const wrongs = []

for (let i = 0; i < iteration; i++) {
  const matrix = _.times(dim, () =>
    _.times(dim, () => _.toInteger(_.random(minVal, maxVal)))
  )
  const submit = det(matrix)
  const answer = rdet(matrix)[0]

  if (submit === answer) {
    matching++
    console.log('matching')
  } else {
    wrongs.push([matrix, submit, answer])
    console.log('unmatching')
  }

  console.log(
    `[dim=${dim}D, test=${i}]\ndetlib = ${submit}\nrobust = ${answer}\n`
  )
}

console.log(
  `test result = ${matching} / ${iteration} (${(matching / iteration) * 100} %)`
)

wrongs.forEach(v => {
  console.log(v[0])
  console.log(v[1], v[2])
})
