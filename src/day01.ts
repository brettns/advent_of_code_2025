const lines = (await Bun.file('input/day01').text()).split('\n')
let total_zeroes = 0
let dial = 50

for (const line of lines) {
    const dir = line[0] === 'L' ? -1 : 1
    let amount = parseInt(line.substring(1))

    if (dir > 0 || dial === 0) {
        total_zeroes += Math.floor((dial + amount) / 100)
    } else {
        total_zeroes += Math.floor((100 - dial + amount) / 100)
    }

    const dist = dir * (amount % 100)

    // javascript can't do mod on negatives
    dial = (((dial + dist) % 100) + 100) % 100
}

console.log(total_zeroes)
