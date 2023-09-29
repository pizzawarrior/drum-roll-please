
//check to vfy that JS file is working on webpage:
//alert("Welcome!");

//This only finds the first button. We need to do the same thing for all the buttons--
// target= button, event listener= click, trigger the function "handleClick"
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
// alert("I got licked!");
// }



// //Listen for a click:
// //Find the num of ALL buttons with class 'drum'
// var numOfDrumButtons = document.querySelectorAll(".drum").length;
// //Loop through ALL buttons who's class is DRUM and add eventListener to each:
// for (var i = 0; i < numOfDrumButtons; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);
//     });
// }
// //listen for a keypress
//     document.addEventListener('keydown', function(e) {

//         makeSound(e.key);

//         buttonAnimation(e.key);

//     });

// //play the sound corresponding to a keypress or click
//     function makeSound(key) {
//         switch (key) {
//             case "w":
//                 var crash = new Audio('sounds/crash.mp3');
//                 crash.play();
//                 break;

//             case "a":
//                 var kickBass = new Audio('sounds/kick-bass.mp3');
//                 kickBass.play();
//                 break;

//             case "s":
//                 var snare = new Audio('sounds/snare.mp3');
//                 snare.play();
//                 break;

//             case "d":
//                 var tom1 = new Audio('sounds/tom-1.mp3');
//                 tom1.play();
//                 break;           

//             case "j":
//                 var tom2 = new Audio('sounds/tom-2.mp3');
//                 tom2.play();
//                 break;

//             case "k":
//                 var tom3 = new Audio('sounds/tom-3.mp3');
//                 tom3.play();
//                 break;

//             case "l":
//                 var tom4 = new Audio('sounds/tom-4.mp3');
//                 tom4.play();
//                 break;

//             default: console.log(buttonInnerHTML);

//             }
//         }

// //add 'animation' (by way of a different class) to the buttons
// function buttonAnimation(currentKey) {
// //locate current key but add the . for proper class formatting
//     var activeButton = document.querySelector("." + currentKey);
// //add the different class list 'pressed'
// activeButton.classList.add("pressed");
// //after a pd. of 200ms remove the class list 'pressed' so the button returns to prev. state
// setTimeout(function() {
//     activeButton.classList.remove("pressed");
//     }, 100);
// }



//same code as above but edited for jQuery:

    //Listen for a click:
    //Search for ALL buttons with class 'drum', if click is detected initiate function
    $('.drum').click(function() {

    //add specificity to the innerHTML of the buttons
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        });

//listen for a keypress
    $(document).keydown(function(e) {

        makeSound(e.key);

        buttonAnimation(e.key);

    });

//play the sound corresponding to a keypress or click
    function makeSound(key) {
        switch (key) {
            case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case "a":
                var kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
                break;

            case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

            case "d":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;           

            case "j":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

            case "k":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            }
        }

//add 'animation' (by way of adding a different class) to the buttons
function buttonAnimation(currentKey) {
    //locate current key and add the . for proper class formatting:
                                    //why this not work ?
                                   // var activeButton = $(document).find('.' + currentKey);

    var activeButton = document.querySelector('.' + currentKey);

//     console.log(activeButton);
// }
    //add the different class list 'pressed' from the css sheet
     activeButton.classList.add("pressed");
    //after a pd. of 200ms remove the class list 'pressed' so the button returns to prev. state
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

