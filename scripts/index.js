for (let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clickHandler);
}

function clickHandler() {
    var soundPath = "sounds/" + this.id +".mp3";
    var sound = new Audio(soundPath);
    sound.play();
}