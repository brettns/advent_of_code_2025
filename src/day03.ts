const lines = (await Bun.file('input/day03').text()).split('\n')

const num_batteries = 12
let total = 0

for await (const line of lines) {
    let idx = 0
    let joltage = 0

    for (let i = num_batteries; i > 0; i--) {
        let max = 0

        for (let x = idx; x < line.length - (i - 1); x++) {
            const n = Number(line[x])
            if (n > max) {
                max = n
                idx = x + 1
            }
        }

        joltage += max * 10 ** (i - 1)
    }

    total += joltage
}

console.log(total)
