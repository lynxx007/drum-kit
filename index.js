var buttonNumber = document.querySelectorAll(".drum").length;
///////////////////////////////////////////// button press
for(var i = 0; i < buttonNumber; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btnInnerHTML = this.innerHTML;

        makeSound(btnInnerHTML);
        btnAnimation(btnInnerHTML);
    });
       
}        

//////////////////////////////////////////////////////////// keyboard press

document.addEventListener("keydown",function(Event){
    makeSound(Event.key);
    btnAnimation(Event.key);
});
    
    

function makeSound(key){
    switch (key){
        case "w":
            var audioCrash = new Audio("sounds/crash.mp3");
            audioCrash.play();
            break;
        case "a":
            var audioKickBass = new Audio("sounds/kick-bass.mp3");
            audioKickBass.play();
            break;
        case "s":
            var audioSnare= new Audio("sounds/snare.mp3");
            audioSnare.play();
            break;
        case "d":
            var audioTom1 = new Audio("sounds/tom-1.mp3");
            audioTom1.play();
            break;
        case "j":
            var audioTom2 = new Audio("sounds/tom-2.mp3");
            audioTom2.play();
            break;
        case "k":
            var audioTom3 = new Audio("sounds/tom-3.mp3");
            audioTom3.play();
            break;
        case "l":
            var audioTom4 = new Audio("sounds/tom-4.mp3");
            audioTom4.play();
            break;

        default:
}
}

function btnAnimation(currentKey){
    var btnAnimate = document.querySelector("."+currentKey);
    btnAnimate.classList.add("pressed");

    setTimeout(function(){
        btnAnimate.classList.remove("pressed");
    },100);
}