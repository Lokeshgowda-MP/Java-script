// function speeding() {
//   let speed = 0;
//   function accelerate() {
//     speed = speed + 10;
//     console.log(" My vehicle is at speed is " + speed);
//   }
// }
// let car = speeding();
// car();
// car();

// let obj = {
//   name: "loki",
//   sayhello: function () {
//     console.log("my name is  ${this.name}");
//   },
// };
// obj.sayhello();

// class house {
//   constructor(name, coloer) {
//     this.name = name;
//     this.coloer = coloer;
//   }
// }
// let value = new house("loki", "red");
// console.log(value);
// let final = new house("lokesh", "blue");
// console.log(final);

class house {
  constructor(name) {
    this.name = name;
  }
  myHouse() {
    console.log("my house name is ${this.name}");
  }
}
// let value = new house("House of loki");
// value.myHouse();
class myHouse extends house {}
let value = new myHouse("loki");
value.myHouse();
