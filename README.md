# Advent of Code 2025

Advent of code 2025 using bun/typescript

## Notes

### Day 1: Secret Entrance
Very easy if you do a grug brain solution, but surprisingly tricky to get an efficient one. Also found out that javascript doens't play nicely with negative modulos.

### Day 2: Gift Shop
This was pretty straight forward. Solution seems pretty slow, but I kind of like it.

### Day 3: Lobby
Another easy one, but the off by one errors here can be kinda crazy.

### Day 4: Printing Department
Typescript quite annoying here as it doesn't understand we've checked the bounds. !'s everywhere unfortunately.

### Day 5: Cafeteria
This seemed like it was going to be an easy "Just use a set" challenge, but we need to be more efficient than that. Ended up just sorting the ranges and then expanding and deleting as we went.

### Day 6: Trash Compactor
A sliding right-to-left window using the operators line as a guide with a bunch of Array reduce() usage.