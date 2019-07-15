console.log("hi");

var bts = ["Mikrokosmos", "Fake Love", "Ddaeng", "Go Go", "Save Me", "I Need U", "Heartbeat", "Scenery", "Anpanman", "A Brand New Day", "Butterfly", "Magic Shop", "Cypher Pt. 4", "The Truth Untold"]
var button = document.getElementById('Get a Song');
button.addEventListener("click", function() {
    var number = randNum(bts);
    changeText(number);
})

function randNum(array) {
  var randomDeci = Math.random();
  var randomBig = randomDeci * array.length;
  var randomNum = Math.floor(randomBig);
  return randomNum
}
//randNum(bts);
var Music = document.getElementById('h2');
function changeText(someNum) {
  Music.innerHTML= bts[someNum];
}
