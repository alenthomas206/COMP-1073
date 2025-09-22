/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterName = "Thor"; 
let age = 42;                          
let isSuperhero = true;              
let specialPowers = ["lightning", "super strength", "flight"]; 
let favoriteFood = "pizza";


// Function to generate a random character description
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomCharacter() {
  age = randomInt(5, 95);
  updateUI();
}

// Functions to update character's age

function changeAge(a) {
  age = Math.max(1, age + a);
  updateUI();
}


// Function to update the character's description after changing age

function funnyDescription() {
  const heroText = isSuperhero ? "superhero" : "ordinary person";
  const powersText = specialPowers.join(", ");
  return `Meet ${characterName}, a ${age}-year-old ${heroText} who loves ${favoriteFood} and has powers like ${powersText}!`;
}
// Add event listeners for buttons using querySelector

document.querySelector("#generateButton").addEventListener("click", generateRandomCharacter);
document.querySelector("#increaseAgeButton").addEventListener("click", () => changeAge(1));
document.querySelector("#decreaseAgeButton").addEventListener("click", () => changeAge(-1));

document.querySelector("#nameInput").addEventListener("input", e => {
  characterName = e.target.value || "Mystery Hero";
  updateUI();
});

document.querySelector("#ageInput").addEventListener("input", e => {
  const newAge = parseInt(e.target.value);
  if (!isNaN(newAge)) {
    age = newAge;
    updateUI();
  }
});

function updateUI() {
  document.querySelector("#nameInput").value = characterName;
  document.querySelector("#ageInput").value = age;
  document.querySelector("#characterDescription").textContent = funnyDescription();
}


updateUI();