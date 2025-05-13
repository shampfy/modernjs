// Example of a for loop
for (let i = 0; i < 5; i++) {
  console.log(`For loop iteration: ${i}`)
}

// Example of a while loop
let j = 0
while (j < 5) {
  console.log(`While loop iteration: ${j}`)
  j++
}

// Example of a do-while loop
let k = 0
do {
  console.log(`Do-while loop iteration: ${k}`)
  k++
} while (k < 5)

// Example of a for...of loop
const array = ["a", "b", "c", "d"]
for (const element of array) {
  console.log(`For...of loop element: ${element}`)
}

// Example of a for...in loop
const object = { name: "John", age: 30, city: "New York" }
for (const key in object) {
  console.log(`For...in loop key: ${key}, value: ${object[key]}`)
}
