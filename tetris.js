document.addEventListener('DOMContentLoaded', () => {
    const width = 10;
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'))
const ScoreDisplay= document.querySelector('#Score')
const StartBtn = document.querySelector('#start-button')
//the Tetromino
const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2+2],
    [width, width*2, width*2+1, width*2+2]
]
const zTetromino = [
    [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
    [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
    [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
    [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1]
  ]

  const tTetromino = [
    [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
    [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1]
  ]

  const oTetromino = [
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    [0, 1, GRID_WIDTH, GRID_WIDTH + 1]
  ]

  const iTetromino = [
    [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
    [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
  
  [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
    [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3]
  ]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  //Randomly Select Tetromino

let currentPosition = 4;
let currentRotation = 0;
let random = Math.floor(Math.random()+theTetrominoes.length)

let current = theTetrominoes[random][0];
function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
    })
}

function undraw(){
current.forEach(index => {
    squares[currentPosition+index].classList.remove('tetromino')
})
}

timerId = setInterval(movedown, 1000)

function control(e){
    if(e.keyCode === 37){
        moveLeft()
    }else if (e.keyCode === 38){
        rotate()
    }else if (e.keyCode === 39){
        moveRight()
    }else if (e.keyCode === 40){
        movedown()
    }
}
document.addEventListener('keyup',control)
function movedown(){
    undraw()
    currentPosition += width
    draw()
    freeze()
}

function freeze() {
    if(current.some(index => squares[currentPosition+index+width].classList.contains('taken'))){
        current.forEach(index => squares[currentPosition + index].classList.add('taken'))
   random =nextRandom;

        nextRandom = Math.floor(Math.random() * theTetrominoes.length)
    current = theTetrominoes[random][currentRotation]
    currentPosition = 4 
    draw()
    displayShape()
    }
}

function moveLeft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
if(!isAtLeftEdge) currentPosition -= 1;
if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
    currentPosition += 1
}
draw()
}

function moveRight(){
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition+index)%width === width-1)
    if(!isAtRightEdge) currentPosition += 1
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
        currentPosition -= 1
    }
    draw()
}

function rotate(){
    undraw()
    currentRotation ++
    if(currentRotation === current.length){
        currentRotation = 0;
    }
    current = theTetrominoes[random][currentRotation]
    draw()
}
const displaySquares = document.querySelectorAll('.mini-grid div')
const displayWidth =4;
let displayIndex = 0;
let nextRandom = 0;
const upNextTetrominoes = [
    [1, displayWidth+1,displayWidth*2+1, 2]
    [0, displayWidth, displayWidth+1, displayWidth*2+1],
    [1, displayWidth, displayWidth+1,displayWidth+2],
    [0,1,displayWidth,displayWidth+1],
    [1, displayWidth+1,displayWidth*2+1, displayWidth*3+1]
]
function displayShape() {
    displaySquares.forEach(square => {
        square.classList.remove('tetromino')
    })
    upNextTetrominoes[netRandom].forEach(index => {
        displaySquares[displayIndex + index].classList.add('tetromino')
    })
}




})