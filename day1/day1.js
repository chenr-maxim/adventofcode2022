const fs = require('fs');
var input = fs.readFileSync('./day1.txt', 'utf-8').replace(/\r/g, "")
  .trim() 
  .split("\n\n");

// part 1

var highestCal = Number.MIN_SAFE_INTEGER;

const elves_calories = input.map((elf) => {
  const totalCal = elf.split('\n').map(x => Number(x)).reduce((acc, currVal) => {
    return acc + currVal;
  });
  highestCal = Math.max(highestCal, totalCal);
  return totalCal;
})

console.log(highestCal, 'highest calories');

// part 2
elves_calories.sort((a,b) => b-a);
const top_three_calories = elves_calories[0] + elves_calories[1] + elves_calories[2];
console.log(top_three_calories, 'top three elves');
