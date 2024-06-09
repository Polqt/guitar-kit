var instruments = document.querySelectorAll(".guitar").length;

for (var i = 0; i < instruments; i++) {
    document.querySelectorAll(".guitar")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

function makeSound(key) {
    switch (key) {
        case "q":
            var guitar1 = new Audio("sounds/bass.wav")
            guitar1.play();
            break;
            
        case "e":
            var guitar2 = new Audio("sounds/electric guitar.wav")
            guitar2.play();
            break;

        case "r":
            var guitar3 = new Audio("sounds/guitar drum.wav")
            guitar3.play()
            break;

        case "t":
            var guitar4 = new Audio("sounds/guitar.wav")
            guitar4.play();
            break;

        case "w":
            var guitar5 = new Audio("sounds/negative guitar.wav")
            guitar5.play();
            break;

        case "a":
            var guitar6 = new Audio("sounds/quick guitar.wav")
            guitar6.play();
            break;

        case "s":
            var guitar7 = new Audio("sounds/short guitar riff.wav")
            guitar7.play();
            break;

        case "d":
            var guitar8 = new Audio("sounds/short guitar strum.wav")
            guitar8.play();
            break;

        default:
            break;
    }
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
}); 