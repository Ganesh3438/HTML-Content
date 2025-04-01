// What is Array in javaScript?
// In JavaScript array is special type of object which is used to store the multiple values in a single variable.
// Arrays can hold elements of any data type, including numbers, strings, objects, and even other arrays.

let fruits = ["Apple", "Banana", "Mango"]
console.log(fruits)

// 1. Fetching specific value from the array and storing in a variable
let res = fruits[2];
console.log(res)

// 2. Using the Array constructor
console.log("---------Using the Array constructor----------------")
let numbers = new Array(10, 20, 30, 40);
console.log(numbers)
let num = numbers[3]
console.log(num)

// 3. Empty array
console.log("---------Empty array----------------------")
let emptyArray = []; 

emptyArray[0] = "Ganesh";
emptyArray[1] = 36;
emptyArray[2] = "empid-1001";
console.log(emptyArray)

// Intermediate Examples
console.log("------------Looping through an Array-------------------------")

let cities = ["India", "NewYork", "London", "Paris"]

for(let i=0; i<cities.length; i++){
    console.log(cities[i]);
}

// Using ForEach method
console.log('-------------Using ForEach method----------------------------')
cities.forEach((city, index, array)=>{
    // console.log(city)
    console.log(`Index ${index} , City ${city}`)
})

