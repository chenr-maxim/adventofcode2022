const fs = require('fs');
var input = fs.readFileSync('./day4.txt', 'utf-8').replace(/\r/g, "")
  .trim() 
  .split("\n");


let fullyContainedPairs = 0;
const handleOverlappedPairs = (firstPair, secondPair) => {
  const firstPairBounds = firstPair.split('-');
  const firstLowerBound = parseInt(firstPairBounds[0]);
  const firstUpperBound = parseInt(firstPairBounds[1]);

  const secondPairBounds = secondPair.split('-');
  const secondLowerBound = parseInt(secondPairBounds[0]);
  const secondUpperBound = parseInt(secondPairBounds[1]);

  // second pair is within first pair
  if(firstLowerBound <= secondLowerBound && firstUpperBound >= secondUpperBound) {
    console.log('second within first');
    return 1;
  }

  //first pair is within second pair
  if(secondLowerBound <= firstLowerBound && secondUpperBound >= firstUpperBound) {
    console.log('first within second');
    return 1;
  }

  return 0;
}

const pairs = input.map((pair) => {
  const split = pair.split(',');
  fullyContainedPairs += handleOverlappedPairs(split[0], split[1]);
});

console.log(fullyContainedPairs, 'part 1 fully contained pairs');

// part 2

let fullyContainedPairs2 = 0;
const handleOverlappedPairs2 = (firstPair, secondPair) => {
  const firstPairBounds = firstPair.split('-');
  const firstLowerBound = parseInt(firstPairBounds[0]);
  const firstUpperBound = parseInt(firstPairBounds[1]);

  const secondPairBounds = secondPair.split('-');
  const secondLowerBound = parseInt(secondPairBounds[0]);
  const secondUpperBound = parseInt(secondPairBounds[1]);

  if(firstUpperBound < secondLowerBound || secondUpperBound < firstLowerBound) {
    return 0;
  }

  return 1;
}

const pairs2 = input.map((pair) => {
  const split = pair.split(',');
  fullyContainedPairs2 += handleOverlappedPairs2(split[0], split[1]);
});

console.log(fullyContainedPairs2, 'part 2 contained pairs');
