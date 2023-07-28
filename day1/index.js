
// Assignment 1: Array Operations
// Objective: Practice adding, removing, and updating values in arrays.

// 1. Create an empty array called "fruits".

// 2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".

// 3. Remove the first fruit from the array.

// 4. Add "grape" to the end of the array.

// 5. Update the second fruit in the array to "pear".

// 6. Print the final "fruits" array after performing the above operations.

let fruits = ["apple","banana","orange"];
fruits.splice(0,1);
console.log(fruits);//["banana","orange"]
fruits.push("grape");
console.log(fruits)//["banana",orange,"grape"]
fruits[1]="pear";
console.log(fruits)//["banana","pear","grape"]


// Assignment 2: Object Operations
// Objective: Practice adding, removing, and updating values in objects.

// 1. Create an empty object called "person".

// 2. Add the following properties to the "person" object:
//    - name: "John"
//    - age: 30
//    - city: "New York"

// 3. Remove the "age" property from the "person" object.

// 4. Add a new property called "job" with the value "Engineer" to the "person" object.

// 5. Update the "city" property of the "person" object to "San Francisco".

// 6. Print the final "person" object after performing the above operations.
let person = {
    name:"john",
    age:30,
    city:"New York"
}
delete person.age;
console.log("After deleting age property:",person);
//add property
person.job = "Engineer";
//update city property
person.city = "San Francisco";
//final object
console.log(person);


// Assignment 3: Array of Objects Operations
// Objective: Practice adding, removing, and updating values in an array of objects.

// 1. Create an empty array called "cars".

// 2. Add three car objects to the "cars" array. Each car object should have the following properties:
//    - make: "Toyota"
//    - model: "Camry"
//    - year: 2018

// 3. Remove the first car object from the "cars" array.

// 4. Add a new car object to the "cars" array with the following properties:
//    - make: "Honda"
//    - model: "Civic"
//    - year: 2020

// 5. Update the "model" property of the second car object in the array to "Accord".

// 6. Print the final "cars" array after performing the above operations.

// Remember to use console.log() to print the arrays and objects in the console to see the results of each operation.

let car = [];
car.push({make:"Toyota",modal:"Camry",year:"2018"},{make:"Toyota",modal:"Camry",year:"2018"},{make:"Toyota",modal:"Camry",year:"2018"});
console.log(car);
car.splice(0,1);
car.push({make:"Honda",modal:"Civic",year:2020});
car[1].modal = "Accord";
console.log(car);


