var randomNumber = function (low, high) {
  return Math.floor(Math.random() * (1 + high - low)) + low;
};

var cube = document.getElementById('cube');
var spinDelay; //timer

var showFace = function () {

  var face = randomNumber(1, 20);

  //if not already at this number
  if (cube.className !== 'show-' + face) {
    cube.className = 'show-' + (21 - face);

    //first spin delay
    spinDelay = setTimeout(function () {
      cube.className = 'show-' + face;
    }, 1000);
  } else {
    //repeat number, try again
    return showFace();
  }

};

document.getElementById('cube').addEventListener('click', function () {

  //clear timers if they are there
  if (typeof spinDelay === "number") {
    clearTimeout(spinDelay);
  }
  showFace();

}, false);
