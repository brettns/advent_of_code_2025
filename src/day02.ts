const text = await Bun.file('input/day02').text()
const pairs = text.split(',').map((p) => p.split('-').map(Number) as [number, number])
let total = 0

for (const pair of pairs) {
    for (let i = pair[0]; i <= pair[1]; i++) {
        if (check_matches(i.toString())) {
            total += i
        }
    }
}

console.log(total)

function check_matches(str: string) {
    const half = Math.floor(str.length / 2)

    outerloop: for (let size = half; size > 0; size--) {
        let chunk = str.slice(0, size)

        for (let i = size; i < str.length; i += size) {
            const next = str.slice(i, i + size)

            if (chunk !== next) {
                continue outerloop
            }

            if (i + size === str.length) {
                return true
            }
        }
    }

    return false
}
