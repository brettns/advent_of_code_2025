# Advent of Code 2025

Advent of code 2025 using bun/typescript. Only part 2 solutions.

## Notes

### [Day 1: Secret Entrance](https://github.com/brettns/advent_of_code_2025/blob/main/src/day01.ts)
Very easy if you do a grug brain solution, but surprisingly tricky to get an efficient one. Also found out that javascript doens't play nicely with negative modulos.

### [Day 2: Gift Shop](https://github.com/brettns/advent_of_code_2025/blob/main/src/day02.ts)
This was pretty straight forward. Solution seems pretty slow, but I kind of like it.

### [Day 3: Lobby](https://github.com/brettns/advent_of_code_2025/blob/main/src/day03.ts)
Another easy one, but the off by one errors here can be kinda crazy.

### [Day 4: Printing Department](https://github.com/brettns/advent_of_code_2025/blob/main/src/day04.ts)
Typescript quite annoying here as it doesn't understand we've checked the bounds. !'s everywhere unfortunately.

### [Day 5: Cafeteria](https://github.com/brettns/advent_of_code_2025/blob/main/src/day05.ts)
This seemed like it was going to be an easy "Just use a set" challenge, but we need to be more efficient than that. Ended up just sorting the ranges and then expanding and deleting as we went.

### [Day 6: Trash Compactor](https://github.com/brettns/advent_of_code_2025/blob/main/src/day06.ts)
A sliding right-to-left window using the operators line as a guide with a bunch of Array reduce() usage.

### [Day 7: Laboratories](https://github.com/brettns/advent_of_code_2025/blob/main/src/day07.ts)
Part 2 for this one was a little confusing as to what the actual goal was, but I eventually got it simplified down pretty nicely.