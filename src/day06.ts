const text = await Bun.file('input/day06').text()
const rows = text.split('\n')
const ops = rows.pop() as string
const results: number[] = []
let right = ops.length

for (let left = ops.length - 1; left >= 0; left--) {
    if (ops[left] === ' ') {
        continue
    }

    const values = []

    for (let i = right - 1; i >= left; i--) {
        values.push(Number(rows.reduce((acc, curr) => acc + curr[i], '')))
    }

    switch (ops[left]) {
        case '*':
            results.push(values.reduce((acc, curr) => acc * curr, 1))
            break
        case '+':
            results.push(values.reduce((acc, curr) => acc + curr, 0))
            break
    }

    right = left - 1
}

console.log(results.reduce((acc, curr) => acc + curr, 0))
