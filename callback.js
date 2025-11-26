// function one(callback) {
//   setTimeout(() => {
//     console.log("function one execeuted");
//     callback();
//   }, 2000);
// }
// function two() {
//   console.log("function two execeuted");
// }
// one(two);

// let values = 500;
// function addmoney(values, callback) {
//   setTimeout(() => {
//     console.log("i have added money", values);
//     callback(values);
//   }, 2000);
// }
// function displayBalance() {
//   console.log("my current balance", values);
// }
// addmoney(1000, displayBalance);

function fetchData(callback) {
  setTimeout(() => {
    console.log("I have fetched the data");
    callback();
  }, 3000);
}
function arrangeData(callback) {
  setTimeout(() => {
    console.log("I have arranged the data");
    callback();
  }, 2000);
}
function displayData() {
  setTimeout(() => {
    console.log("I have displayed the data");
  }, 1000);
}

fetchData(() => {
  arrangeData(() => {
    displayData();
  });
});
