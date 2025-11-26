let array = [1, 2, 3, 4, 5];
let final = 5;
let result = [];
function sumFinal() {
  for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      if (array[i] + array[j] == final) {
        result.push([i, j]);
      }
    }
  }
  console.log(result);
}

sumFinal();
