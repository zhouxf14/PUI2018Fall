function Dog(name, age, character) {
  this.name = name;
  this.age = age;
  this.type = "Dog";
  this.character = character;
  this.image = "images/dog.jpg";
}

function Cat(name, age, character) {
  this.name = name;
  this.age = age;
  this.type = "Cat";
  this.character = character;
  this.image = "images/cat.jpg";
}

function Deer(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Deer";
  this.image = "images/deer.jpg";
}

var animals = [new Dog(), new Cat(), new Deer()];

var names = ["Harry", "Hermione", "Lily"];

// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Deer) 
  {
    return new Deer(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
$(document).ready(function() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});
