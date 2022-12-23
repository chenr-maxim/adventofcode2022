const fs = require('fs');
var input = fs.readFileSync('./day2.txt', 'utf-8').replace(/\r/g, "")
  .trim() 
  .split("\n");

// part 1
// rock = A and X
// paper = B and Y
// scissor = C and Z
const scoringGuide = {
  'A': {
    X: 3,
    Y: 6,
    Z: 0
  },
  'B': {
    X: 0,
    Y: 3,
    Z: 6
  },
  'C': {
    X: 6,
    Y: 0,
    Z: 3
  }
};

const shapeScoringGuide = {
  'X': 1,
  'Y': 2,
  'Z': 3
}

const strategyGuide = input.map((line) => {
  const mapping = {};
  const [key, value] = line.split(' ');
  mapping[key] = value;
  return mapping;
});

let score = 0;
strategyGuide.forEach((round) => {
  const [key, value] = Object.entries(round)[0];
  const opponentPlays = scoringGuide[key];
  score += opponentPlays[value];
  score += shapeScoringGuide[value];
});

console.log(score, 'score');

// part 2
// A Y
// B X
// C Z

const scoringGuide_part2 = {
  X: {
    'A': 'Z',
    'B': 'X',
    'C': 'Y',
    score: 0
  },
  Y: {
    'A': 'X',
    'B': 'Y',
    'C': 'Z',
    score: 3
  },
  Z: {
    'A': 'Y',
    'B': 'Z',
    'C': 'X',
    score: 6
  }
}

let score_part2 = 0;
strategyGuide.forEach((round) => {
  const [key, value] = Object.entries(round)[0];
  // intended result score
  const intendedResult = scoringGuide_part2[value];
  // the shape needed to achieve intended result
  const intendedResultShape = intendedResult[key];
  score_part2 += (intendedResult.score + shapeScoringGuide[intendedResultShape]);
});

console.log(score_part2, 'part 2 score');