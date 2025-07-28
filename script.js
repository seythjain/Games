// Variables 
var canvas = document.getElementById("mycanvas"); 
var c = canvas.getContext("2d"); 
const delay = 100;
const size = 20;   // tile size on game board
canvas.width = 700;
canvas.height = 700;

var snakeX = 100;
var snakeY = 100;
var dx = size;
var dy = 0;

var snake =[];
var snakeParts = 5;
var foodX = 20;
var foodY = 20;
var score = 0;

// Functions 

function drawFood(){
  var apple = new Image()
  apple.src="apple.png"
  c.drawImage(apple, foodX, foodY, size, size)
}


function drawBoard(){
  c.fillStyle="grey";
  c.fillRect(0, 0, canvas.width, canvas.height)
}
function drawSnake(){
  snake.forEach(drawPart)

  // c.fillStyle="#e8e111";
  // c.fillRect(snakeX, snakeY, size, size)
}

function drawPart(part){
  c.fillStyle="#e8e111";
  c.fillRect(part.x, part.y, size, size)
}

function moveSnake(){
  snakeX += dx;
  snakeY += dy;

  var part = {}
  part.x = snakeX;
  part.y = snakeY;
  snake.push(part) 

  if(snake.length > snakeParts) snake.shift();
}

function eatFood(){
  if(snakeX == foodX && snakeY == foodY){
    snakeParts += 1;
    score++;
    foodX = randomNum(canvas.width)
    foodY = randomNum(canvas.height)
  }
}

function wrapAround(){
  if (snakeX > canvas.width) snakeX = 0; 
  if (snakeX < 0) snakeX = canvas.width;
  if (snakeY > canvas.height) snakeY = 0; 
  if (snakeY < 0) snakeY = canvas.height;
}

function drawText(text){
 c.fillStyle = "red";
 c.font = "bold 50px Arial";
 c.textAlign = "center";
 c.fillText(text, canvas.width/2, canvas.height/2); 
}

function drawScore(text){
    c.fillStyle = "white";
    c.font = "bold 20px Arial";
    c.textAlign = "left";
    c.fillText(text, 20, canvas.height-20); 
}
function reload() {
    location.reload()
}

game();

// add game code here
// CONTAINS THE END GAME FUNCTION!!!!!
function game(){
  if (touchingSelf() || touchingEdge()) {
    drawText("Game Over");
    document.getElementsByTagName('button')[1].style.visibility="visible";
    return
 };
    document.getElementsByTagName("button")[0].style.visibility="hidden";

    drawBoard();
    drawSnake();
    moveSnake();
    drawFood();
    eatFood();
    wrapAround();
    drawScore(score);

  setTimeout(requestAnimationFrame, delay, game);
}

document.addEventListener("keydown", handleKey)


