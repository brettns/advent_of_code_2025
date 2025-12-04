import file_read_lines from './io'

let total_zeroes = 0
let dial = 50

for await (const line of file_read_lines('input/day01')) {
    const dir = line[0] === 'L' ? -1 : 1
    let amount = parseInt(line.substring(1))
    let num_zeroes = 0

    if (dir > 0 || dial === 0) {
        num_zeroes = Math.floor((dial + amount) / 100)
    } else {
        num_zeroes = Math.floor((100 - dial + amount) / 100)
    }

    total_zeroes += num_zeroes
    const dist = dir * (amount % 100)

    // javascript can't do mod on negatives
    dial = (((dial + dist) % 100) + 100) % 100
}

console.log(total_zeroes)
