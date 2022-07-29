var numberofdrumbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberofdrumbuttons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 var buttonInnerHTML = this.innerHTML;
 makesound(buttonInnerHTML);
 buttonAnimation(buttonInnerHTML);

})};


document.addEventListener("keypress",function(event){
makesound(event.key);
buttonAnimation(event.key);

});


function makesound(key){
   key =key.toUpperCase();

 switch(key)
{
case "A":
    var G4=new Audio("sounds/G4.mpeg");
    G4.play();
    break;
case "B":
    var D4=new Audio("sounds/D4.mpeg");
    D4.play();
    break;
case "C":
    var C4=new Audio("sounds/C4.mpeg");
    C4.play();
   break;
case "D":
    var E4=new Audio("sounds/E4.mpeg");
    E4.play();
    break;
case "E":
    var F4=new Audio("sounds/F4.mpeg");
    F4.play();
    break;

}};

function buttonAnimation(currentkey)
{
var activeButton = document.querySelector("."+ currentkey);
activeButton.classList.add("pressed");
setTimeout(function(){
activeButton.classList.remove("pressed");
},100)
}
  