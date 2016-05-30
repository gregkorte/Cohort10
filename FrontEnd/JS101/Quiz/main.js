var height = document.getElementById("height");
var character = document.getElementById("character");
var button = document.getElementById("button");

button.addEventListener("click", checkParams);


function checkParams(){
  // checkInput();
  if(!height.value && !character.value){
    alert("You must enter values!");
  } else if(!height.value){
    alert("You must enter a height.");
  } else if(!character.value){
    alert("You must enter a character!");
  } else {
    var tree = {
      height: height.value,
      character: character.value
    }
    printTree(tree);
  }
}

// function checkInput(){
//   if((height.value < 1 || height.value > 100) || (character.value.length > 1)){
//     alert("You must enter a number between 1 and 100 and only 1 character!");
//     document.location.reload();
//   }
// }

addEventListener("keydown", function(event){
  if(event.keyCode === 13 && (height === document.activeElement || character === document.activeElement)){
    checkParams();
  }
})

function printTree(tree){
  var h = tree.height;
  var c = tree.character;
  for(var i = 1; i <= h; i++){
    var numSpaces = h - i;
    var numChar = (2 * i) - 1;
    console.log(" ".repeat(numSpaces) + c.repeat(numChar))
  }
}