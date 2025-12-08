const grid = (await Bun.file('input/day07').text()).split('\n')
const counts = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0))

counts[1][grid[0].indexOf('S')] = 1

for (let y = 1; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
        if (counts[y - 1][x] > 0) {
            if (grid[y][x] === '^') {
                counts[y][x - 1] += counts[y - 1][x]
                counts[y][x + 1] += counts[y - 1][x]
            } else {
                counts[y][x] += counts[y - 1][x]
            }
        }
    }
}

console.log(counts[counts.length - 1].reduce((acc, curr) => acc + curr, 0))
