/**
 * @description summation of sequence
 * @param { number[] } sequence
 * @param { number } startIndex
 * @param { number } endIndex
 */
function sum(sequence, startIndex, endIndex) {
  let s = 0

  for (let i = startIndex; i < endIndex; i++) {
    s += sequence[i]
  }

  return s
}

/**
 * @description multiplication of sequence
 * @param { number[] } sequence
 * @param { number } startIndex
 * @param { number } endIndex
 */
function mul(sequence, startIndex, endIndex) {
  let m = 1

  for (let i = startIndex; i < endIndex; i++) {
    m *= sequence[i]
  }

  return m
}

/**
 * @description Used in determinant calculations.
 * @param { number[] } indexes
 */
function epsilon(...indexes) {
  let val = 1

  for (let i = 0; i < indexes.length; i++) {
    while (i !== indexes[i]) {
      const j = indexes[i]
      if (indexes[j] === j) return 0
      ;[indexes[i], indexes[j]] = [indexes[j], indexes[i]]
      val *= -1
    }
  }

  return val
}

/**
 *
 * @param { number } n - size of sequence
 * @param { number } r - size of selected
 * @param { number[][] } perm - must use default value
 * @param {*} selected - must use default value
 * @param {*} isUsed - must use default value
 */
function getPermutation(n, r, perm = [], selected = [], isUsed = {}) {
  if (selected.length === r) {
    perm.push(selected)
    return perm
  }

  for (let i = 0; i < n; i++) {
    if (isUsed[i]) continue

    selected.push(i)
    isUsed[i] = true

    getPermutation(n, r, perm, selected.slice(), isUsed)

    selected.pop()
    isUsed[i] = false
  }

  return perm
}

/**
 * @description get determinant of matrix
 * @param { any[] } matrix
 */
export default function det(matrix) {
  const size = matrix.length
  const perm = getPermutation(size, size)

  const sumSeq = perm.map(p => {
    const eps = epsilon(...p)
    const mulSeq = p.map((n, i) => matrix[n][i])
    return eps * mul(mulSeq, 0, size)
  })

  return sum(sumSeq, 0, perm.length)
}
