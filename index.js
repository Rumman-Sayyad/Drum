var a = document.querySelectorAll(".drum").length;

for (var i= 0; i< a; i++){
    document.querySelectorAll(".drum")[i].addEventListener("mouseover", handle) ;
    function handle() {
var buttum = this.innerHTML;

makesound(buttum);

Addanimation(buttum);

}


         
}


document.addEventListener("keydown", function(event) { 
makesound(event.key);
Addanimation(event.key);
});


function makesound(key){
    console.log("key", key)
    switch (key) {
        case "w":
        var TOM1 = new Audio("sounds/tom-1.mp3");
    TOM1.play();
            break;
    case "a":
        var TOM2 = new Audio("sounds/tom-2.mp3");
        TOM2.play();
        break;
    case "s":
        var TOM3 = new Audio("sounds/tom-3.mp3");
        TOM3.play();
        break;
    case "d":
        var TOM4 = new Audio("sounds/tom-4.mp3");
        TOM4.play();
        break;
    case "j":
        var SNARE = new Audio("sounds/snare.mp3");
        SNARE.play();
        break;
    case "k":
        var KICK = new Audio("sounds/kick-bass.mp3");
        KICK.play();
        break;
    case "l":
        var CRASH = new Audio("sounds/crash.mp3");
        CRASH.play();
        break;

    default:console.log(innerHTML);
    }
}


function Addanimation(currentKey){
    console.log("aa",currentKey );
var activekey = document.querySelector ("." + currentKey);
activekey.classList.add("pressed"); 
console.log("bb",activekey );

setTimeout(function() {
    activekey.classList.remove("pressed");
}, 100);

}