var Box;
function setup() {
  createCanvas(400,400);
Box = createSprite (200, 200, 15, 15);
}

function draw() 
{
  background(30);
 drawSprites ();
 if(keyDown("right")){
   Box.x = Box.x + 4;
  
 }
 if(keyDown("left")){
   Box.x = Box.x - 4
 }
 if(keyDown("up")){
   Box.y = Box.y - 5
 }
 if(keyDown("down")){
   Box.y = Box.y + 5
 }
} 



