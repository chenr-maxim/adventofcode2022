let board = [[],[],[],[],[],[],[],[],[]];
let board2 = [[],[],[],[],[],[],[],[],[]];
let exampleBoard = [[],[],[]];

const rows = [
  'SZPDLBFC',
  'NVGPHWB',
  'FWBJG',
  'GJNFLWCS',
  'WJLTPMSH',
  'BCWGFS',
  'HTPMQBW',
  'FSWT',
  'NCR'
];

const exampleRows = [
  'ZN',
  'MCD',
  'P'
]

// board setup
for(let i = 0; i < rows.length; i++) {
  const splitRow = rows[i].split('');
  for(const letter of splitRow) {
    board[i].push([letter]);
    board2[i].push([letter]);
    // exampleBoard[i].push([letter]);
  }
}

const fs = require('fs');
var input = fs.readFileSync('./day5.txt', 'utf-8').replace(/\r/g, "")
  .trim() 
  .split("\n");


//part 1

const handleMoveFrom = (move, from) => {
  // handle amount of items to move
  const itemsToMove = move.split(' ')[1];

  // handle which containers to move from 
  const regex = /^[^\d]*(\d+)/;
  const fromContainer = from.match(regex)[1] - 1;
  const toContainer = from[from.length - 1] - 1;

  for(let i = 0; i < itemsToMove; i++) {
    const itemToMove = board[fromContainer].pop();   
    board[toContainer].push(itemToMove);
  }
}

const instructions = input.forEach((line) => {
  const moveCommand = line.slice(0, line.indexOf('from'));
  const fromCommand = line.slice(line.indexOf('from'));

  handleMoveFrom(moveCommand, fromCommand);
});

let crateMessage = '';
for(let i = 0; i < board.length; i++) {
  const rowLength = board[i].length - 1;
  crateMessage += board[i][rowLength].toString();
}

console.log(crateMessage, 'part 1 crate message');

// part 2

const handleMoveFrom2 = (move, from) => {
    // handle amount of items to move
    const itemsToMove = move.split(' ')[1];

    // handle which containers to move from 
    const regex = /^[^\d]*(\d+)/;
    const fromContainer = from.match(regex)[1] - 1;
    const toContainer = from[from.length - 1] - 1;
  
    const indexToSpliceFrom = board2[fromContainer].length - itemsToMove;
    const itemToMove = board2[fromContainer].splice(indexToSpliceFrom, itemsToMove);   
    board2[toContainer].push(...itemToMove);
}

const instructions2 = input.forEach((line) => {
  const moveCommand = line.slice(0, line.indexOf('from'));
  const fromCommand = line.slice(line.indexOf('from'));

  handleMoveFrom2(moveCommand, fromCommand);
});

let crateMessage2 = '';
for(let i = 0; i < board2.length; i++) {
  const rowLength = board2[i].length - 1;
  crateMessage2 += board2[i][rowLength].toString();
}

console.log(crateMessage2, 'part 2 crate message');
