var name = "lokesh";
console.log("This is the first module: " + name);

let city = "mysore";
console.log(city);

const country = "india";
console.log(country);

function greet() {
  console.log("Hello from the first module!");
}
hello();

greet();
function hello() {
  console.log("Hello World!");
}

export { name, city, country, greet };

export default function defaultFunction() {
  console.log("This is the default exported function.");
}

// End of first.js
// This is a comment at the end of the file.
// Another comment line.

// Yet another comment line.
// One more comment for good measure.
// Final comment line.
