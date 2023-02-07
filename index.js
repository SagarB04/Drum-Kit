var n = document.querySelectorAll(".drum").length;

for (let i = 0; i < n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", drumSet);
}

document.addEventListener("keydown", drumKeys);

function drumSet() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

function drumKeys(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            return tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            return tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            return tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            return tom4.play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            return crash.play();
            break;

        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            return kickBass.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            return snare.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activButton = document.querySelector("." + currentKey);
    activButton.classList.add("pressed");

    setTimeout(removeClass, 100);

    function removeClass() {
        activButton.classList.remove("pressed");
    }
}
