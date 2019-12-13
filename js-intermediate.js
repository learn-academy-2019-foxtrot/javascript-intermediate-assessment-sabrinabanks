// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

oddChecker = (array) => {
 let newArr = array.filter(value => typeof value === 'number' && value % 2 !== 0)
 return newArr
}

console.log(oddChecker(fullArr1));


// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

oddChecker = (array) => {
 let newArr = array.filter(value => typeof value === 'number' && value % 2 !== 0)
 return newArr
}

console.log(oddChecker(fullArr2));

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],

const reversed= originalArray1.reverse();
console.log(reversed)


var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

const reversed1= originalArray2.reverse();
console.log(reversed1)


// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

ourarray = (string) => {
		var split =	string.toLowerCase().split("")
		var count = 0
		split.filter(v => {
			if (v === "l") {
				count++
			}
		})
		return count
}

console.log(ourarray(ourString));



// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”


const middlestring = (string) => {
	let middle = Math.floor(string.length/2)
	if (string.length % 2 ===0) {
		return string[middle-1]+ string[middle]
	} else {
		return string[middle]
	}
}

console.log(middlestring(middleLetters1));



var middleLetters2 = "rhinoceros"
// Expected output: “oc”




// 7. Write a program to get the area of a sphere using object classes.
// Create three spheres with different radi as test cases.
// Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
  constructor(radius) {
			this.radius = radius
			this.area = (4 * 3.14 * this.radius ** 2)
	}
}

const sphere1 = new Sphere(3)
const sphere2 = new  Sphere(4)
const sphere3 = new Sphere (14)


console.log(sphere1.area);
console.log(sphere2.area);
console.log(sphere3.area);



// 8. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}
var {specs:{ doors,transmission}} = myCar

console.log(doors,transmission)

// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
