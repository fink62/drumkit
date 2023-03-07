for (let i = 0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", clickHandler);
}

function clickHandler() {
    alert("I got clicked!");
}