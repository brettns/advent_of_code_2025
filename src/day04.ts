const grid = (await Bun.file('input/day04').text()).split('\n').map((line) => line.split(''))
const height = grid.length
const width = grid[0]!.length
let total = 0
let removed = 1

while (removed > 0) {
    removed = 0

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y]!.length; x++) {
            if (grid[y]![x] === '@') {
                const count = get_neighbors(x, y)
                    .filter((n) => n === '@')
                    .toArray().length

                if (count < 4) {
                    total++
                    removed++
                    grid[y]![x] = '.'
                }
            }
        }
    }
}

console.log(total)

function* get_neighbors(x: number, y: number) {
    // top row
    if (x - 1 >= 0 && y - 1 >= 0) yield grid[y - 1]![x - 1]
    if (y - 1 >= 0) yield grid[y - 1]![x]
    if (x + 1 < width && y - 1 >= 0) yield grid[y - 1]![x + 1]

    // middle row
    if (x - 1 >= 0) yield grid[y]![x - 1]
    if (x + 1 < width) yield grid[y]![x + 1]

    // bottom row
    if (x - 1 >= 0 && y + 1 < height) yield grid[y + 1]![x - 1]
    if (y + 1 < height) yield grid[y + 1]![x]
    if (x + 1 < width && y + 1 < height) yield grid[y + 1]![x + 1]
}
