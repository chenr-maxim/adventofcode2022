const fs = require('fs');
var input = fs.readFileSync('./day3.txt', 'utf-8').replace(/\r/g, "")
  .trim() 
  .split("\n");

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let prioritySum = 0;

const lowerCasePriority = {}; 
const upperCasePriority = {};

lowerCase.split('').map((letter, index) => {
  lowerCasePriority[letter] = index + 1;
});

upperCase.split('').map((letter, index) => {
  const upperCaseOffset = 26;
  upperCasePriority[letter] = index + 1 + 26;
});

// part 1

const commonLetters = (str1, str2, str3) => {
  const first = str1.split('');
  const second = str2.split('');
  const third = str3.split('');
  const commonLetters = new Set();

  if(third.length !== 0) {
    for(let i = 0; i < first.length; i++) {
      const commonLetter = first[i];
      if(second.includes(commonLetter) && third.includes(commonLetter)) {
        commonLetters.add(commonLetter);
      }
    }

  } else {
    for(let i = 0; i < first.length; i++) {
      const commonLetter = first[i];
      if(second.includes(commonLetter)) {
        commonLetters.add(commonLetter);
      }
    }
  }

  const iterator = commonLetters.values();
  return iterator.next().value;
}

const commonItems = input.forEach((rucksack) => {
  const rucksackLen = rucksack.length / 2;
  const firstCompartment = rucksack.slice(0, rucksackLen);
  const secondCompartment = rucksack.slice(rucksackLen);

  const letter = commonLetters(firstCompartment, secondCompartment, '');

  if(!lowerCasePriority[letter]) {
    prioritySum += upperCasePriority[letter];
  } else {
    prioritySum += lowerCasePriority[letter];
  }
});

console.log(prioritySum, 'priority sum part 1');

// part 2
let prioritySum2 = 0;
const grouping = [];

for(let i = 1; i <= input.length; i++) {
  if(i % 3 === 0) {
    const group = [];
    group.push(input[i - 1]);
    group.push(input[i - 2]);
    group.push(input[i - 3]);

    grouping.push(group);
  }
};

const priorityPart2 = grouping.map((group) => {
  const commonLetter = commonLetters(group[0], group[1], group[2]);
  
  if(!lowerCasePriority[commonLetter]) {
    prioritySum2 += upperCasePriority[commonLetter];
  } else {
    prioritySum2 += lowerCasePriority[commonLetter];
  }
});

console.log(prioritySum2, 'priority sum 2');