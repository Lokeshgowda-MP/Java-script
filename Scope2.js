let name = "Amar";
function outer() {
  let name2 = "Akbar";

  function inner() {
    let name3 = "Anthony";
    console.log(name);
    console.log(name2);
    console.log(name3);
  }
  inner();
}
outer();
