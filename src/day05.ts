const text = await Bun.file('input/day05').text()
const sep_idx = text.indexOf('\n\n')
let ranges = text
    .substring(0, sep_idx)
    .split('\n')
    .map((line) => line.split('-').map(Number))
    .map((arr) => ({ min: arr[0], max: arr[1] }))

ranges.sort((a, b) => (a.min < b.min ? 1 : -1))

// Expand out the max of our sorted ranges
for (let i = ranges.length - 1; i > 0; i--) {
    if (ranges[i].max >= ranges[i - 1].min && ranges[i].max < ranges[i - 1].max) {
        // consume your neighbor
        ranges[i].max = ranges[i - 1].max
        ranges.splice(i - 1, 1)
    } else if (ranges[i].max >= ranges[i - 1].max) {
        // your neighbor is redundant
        ranges.splice(i - 1, 1)
    }
}

const total_fresh_ids = ranges.reduce((acc, curr) => acc + curr.max - curr.min + 1, 0)
console.log(total_fresh_ids)
