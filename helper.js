
// Helper functions
 
/* request() function: 
waits (delay) milliseconds before calling requestAnimationFrame() with myFunction() */ 

function request(myFunction){
    var delay = 100;  // animation speed delay
    setTimeout(requestAnimationFrame, delay, myFunction);
  }
  
  // event handler for key down event 
  function handleKey(e){
    if (e.key == "ArrowLeft") {          
      dx = -size; 
      dy = 0;
    } else if (e.key == "ArrowUp") {       
      dx = 0; 
      dy = -size;
    } else if (e.key == "ArrowRight") {    
      dx = size; 
      dy = 0;
    } else if (e.key == "ArrowDown") {   
      dx = 0; 
      dy = size;
    }
  }
  
  // returns random number between 0 and n (multiple of tile size) 
  function randomNum(n){
    return Math.floor(Math.random()*n/size)*size; 
  }
  
  // returns true if the snake is touching itself 
  function touchingSelf(){
    var front = snake.length - 1; 
    for (var i=0; i<front; i++){
      if (snake[i].x == snake[front].x && snake[i].y == snake[front].y) return true;
    }
  }
  
  // returns true if snake is touching edge 
  function touchingEdge(){
    return (snakeX < 0 || snakeY < 0 || snakeX > canvas.width-1 || snakeY > canvas.height-1)
  }
  
  // draws large text centered on the screen 
  function drawText(text){
   c.fillStyle = "red";
   c.font = "bold 50px Arial";
   c.textAlign = "center";
   c.fillText(text, canvas.width/2, canvas.height/2); 
  }
  
  // draws text (score) on the bottom left corner
  function drawScore(text){
   c.fillStyle = "white";
   c.font = "bold 20px Arial";
   c.textAlign = "left";
   c.fillText(text, 20, canvas.height-20); 
  }
  
  // updates snake array 
  function updateSnakeArray(){
    // create new object to hold x & y position of head
    var head = {x: snakeX, y: snakeY};
    // add new part to snake array (head)
    snake.push(head); 
    // remove first item in snake array
    while (snake.length > length) snake.shift(); 
  }
  
  ////////////////////////////////// 
  /*      ADD YOUR OWN IMAGE!       */
  //////////////////////////////////
  
  
  
  // draws an image for the snake head
  function drawSnakeHead(){
    var snakehead = new Image();
    snakehead.src = "snakehead.png";
    c.drawImage(snakehead, snakeX, snakeY, size, size);
  }
  