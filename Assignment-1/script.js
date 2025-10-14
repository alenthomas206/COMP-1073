var who = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var what = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjective = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var animal = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var place = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

var selections = { who: "", what: "", adjective: "", animal: "", place: "" };

function cycleChoice(arr, key, displayId) {
  var current = selections[key];
  var nextIndex = 0;
  var i;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === current) {
      nextIndex = (i + 1) % arr.length;
      break;
    }
  }

  selections[key] = arr[nextIndex];
  document.getElementById(displayId).textContent = selections[key];
}

function makeStory() {
  if (
    selections.who === "" ||
    selections.what === "" ||
    selections.adjective === "" ||
    selections.animal === "" ||
    selections.place === ""
  ) {
    document.getElementById("storyOutput").textContent = "Please make all selections first!";
    return;
  }

  var story = selections.who + " " + selections.what + " " + selections.adjective + " " +
               selections.animal + " " + selections.place + ".";
  document.getElementById("storyOutput").textContent = story;
}

function randomStory() {
  selections.who = who[Math.floor(Math.random() * who.length)];
  selections.what = what[Math.floor(Math.random() * what.length)];
  selections.adjective = adjective[Math.floor(Math.random() * adjective.length)];
  selections.animal = animal[Math.floor(Math.random() * animal.length)];
  selections.place = place[Math.floor(Math.random() * place.length)];

  document.getElementById("whoText").textContent = selections.who;
  document.getElementById("whatText").textContent = selections.what;
  document.getElementById("adjText").textContent = selections.adjective;
  document.getElementById("animalText").textContent = selections.animal;
  document.getElementById("placeText").textContent = selections.place;

  makeStory();
}

function resetAll() {
  selections = { who: "", what: "", adjective: "", animal: "", place: "" };
  document.getElementById("whoText").textContent = "";
  document.getElementById("whatText").textContent = "";
  document.getElementById("adjText").textContent = "";
  document.getElementById("animalText").textContent = "";
  document.getElementById("placeText").textContent = "";
  document.getElementById("storyOutput").textContent = "";
}

document.getElementById("whoBtn").onclick = function() { cycleChoice(who, "who", "whoText"); };
document.getElementById("whatBtn").onclick = function() { cycleChoice(what, "what", "whatText"); };
document.getElementById("adjBtn").onclick = function() { cycleChoice(adjective, "adjective", "adjText"); };
document.getElementById("animalBtn").onclick = function() { cycleChoice(animal, "animal", "animalText"); };
document.getElementById("placeBtn").onclick = function() { cycleChoice(place, "place", "placeText"); };

document.getElementById("makeBtn").onclick = makeStory;
document.getElementById("randomBtn").onclick = randomStory;
document.getElementById("resetBtn").onclick = resetAll;
