// my library
import det from '../index.js'

// well-known library
import rdet from 'robust-determinant'

import _ from 'lodash' // to get random array

const minVal = 0,
  maxVal = 30

function clock(label, f) {
  console.time(label)
  f()
  console.timeEnd(label)
}

for (let i = 2; i <= 10; i++) {
  const matrix = _.times(i, () =>
    _.times(i, () => _.toInteger(_.random(minVal, maxVal)))
  )
  console.log(`${i} x ${i} matrix`)
  clock('detlib', det.bind(null, matrix))
  clock('robust', rdet.bind(null, matrix))
  console.log('-----------')
}
