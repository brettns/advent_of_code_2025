import fs from 'node:fs'
import readline from 'node:readline'

// Always be reading them lines one at a time
export default function file_line_reader(file: string) {
    const fileStream = fs.createReadStream(file)
    return readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })
}
