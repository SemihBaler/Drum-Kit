var numberOfDrumsButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumsButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    makeSound(button);
    animation(button);
  });
}
document.addEventListener("keypress", function (e) {
  makeSound(e.key);
  animation(e.key);
});

function makeSound(e) {
  switch (e) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/808-kick-sample-9192.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 90);
}
