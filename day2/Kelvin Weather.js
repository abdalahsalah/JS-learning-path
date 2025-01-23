const kelvin = 293 //The forecast today is 293
const Celsius = kelvin - 273 //Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
var fahrenheit = Celsius * (9/5) + 3 //calculate Fahrenheit
fahrenheit = Math.floor(fahrenheit); //method in JavaScript rounds a number down to the nearest integer. It returns the largest integer less than or equal to a given numbe
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
`)