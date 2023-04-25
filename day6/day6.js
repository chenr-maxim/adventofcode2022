const fs = require("fs");
var input = fs.readFileSync("./day6.txt", "utf-8").replace(/\r/g, "").trim();

const isUnique = (array) => {
  return new Set(array).size === array.length;
};

const processSignalMarker = (count) => {
  let slidingWindow = [];

  for (let i = 0; i < input.length; i++) {
    slidingWindow.push(input[i]);
    if (slidingWindow.length > count) {
      slidingWindow.shift();
    }

    if (slidingWindow.length === count && isUnique(slidingWindow)) {
      console.log(i + 1, "answer");
      break;
    }
  }
};

// part 1
processSignalMarker(4);

// part 2
processSignalMarker(14);
