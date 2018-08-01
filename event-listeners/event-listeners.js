// YOUR TASK: Add more pictures!
var pictures = ['./imgs/image2.jpeg','./imgs/image3.jpeg', './imgs/image4.jpeg', './imgs/image5.jpeg'];
var currentIndex = 0;

var img = document.getElementsByTagName('img')


function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  img[0].src = pictures[currentIndex];
  // YOUR TASK: Finish this function!
}

document.getElementsByTagName("body")[0].addEventListener("click", function (event) {showNextPicture()})