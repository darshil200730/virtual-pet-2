//Create variables here
var dogimage
var dog
var database
var foodstock
var button
function preload()
{
	//load images here
  dogimage=loadImage("images/dogImg.png")

  
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(300,300,50,50)
dog.addImage(dogimage)
database=firebase.database()
var foodvalue=database.ref("food")
foodvalue.on("value",function(data){
foodstock=data.val().count;

})
button=createButton("feed the dog")
button.position(650,200)
}


function draw() {  
background("pink")
text (foodstock,650,350)
  drawSprites();
  //add styles here
  button.mousePressed(()=>{
    updatefood()
  })
if(keyDown("UP_ARROW"))
{
  
}
}
function updatefood(){
  database.ref("food").update({
    count:foodstock-1
  })
}


