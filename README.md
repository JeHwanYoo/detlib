# detlib - Get determinant of matrix in javascript

## Installation

```bash
npm install detlib
```

## Usage

```javascript
import det from 'detlib'

// The determinant is only defined for square matrices.
const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

// Get the determinant of a 3-by-3 square matrix.
const dval = det(mat)
```

## Efficiency Test Result (detlib vs robust-determinant)

```plain
2 x 2 matrix
detlib: 0.115ms
robust: 0.127ms
-----------
3 x 3 matrix
detlib: 0.074ms
robust: 0.072ms
-----------
4 x 4 matrix
detlib: 0.039ms
robust: 0.133ms
-----------
5 x 5 matrix
detlib: 0.139ms
robust: 0.263ms
-----------
6 x 6 matrix
detlib: 1.775ms
robust: 2.732ms
-----------
7 x 7 matrix
detlib: 2.723ms
robust: 15.893ms
-----------
8 x 8 matrix
detlib: 19.617ms
robust: 98.031ms
-----------
9 x 9 matrix
detlib: 144.343ms
robust: 883.831ms
-----------
10 x 10 matrix
detlib: 1.558s
robust: 12.189s
-----------
```

nice 👍
