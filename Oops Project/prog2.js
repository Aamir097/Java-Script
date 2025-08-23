function greet(name, age,height) {
  if (age === undefined) {
    console.log(`Hello ${name}`);
  } else {
    console.log(`Hello ${name}, you are ${age} years old`);
    console.log(`Your height is ${height}`);
  }
}

greet("Aamir");
greet("Aamir", 27);
greet("Aamir",27,172);
