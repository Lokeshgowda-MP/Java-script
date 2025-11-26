// class Bank {
//   #bengaluru;
//   constructor(balance) {
//     this.#bengaluru = balance;
//   }
//   bankBalance() {
//     console.log("I have a balance ${this.#bengaluru}");
//   }
// }
// let value = new Bank(1000);
// value.bankBalance();
// console.log(value.#balance);

// class Bank {
//     bankbalance(){
//         console.log("My bank balance ");
//     }
//     class AxisBank extends Bank {
//         bankbalance(){
//             console.log("My axis bank balance ");
//         }
//     }
//   }

// let value = new AxisBank();
// value.bankbalance();

// class DL {
//   isEligible(name, age) {
//     if (age == undefined || age < 18) {
//       console.log("not Eligible ");
//     } else {
//       console.log("Eligible ");
//     }
//   }
// }
// let value = new DL();
// value.isEligible("lokesh");
// value.isEligible("lokesh", 20);

class Bank {
  constructor(name) {
    this.name = "SBI";
  }
}
class AxisBank extends Bank {
  constructor(name, city) {
    super(name);
    this.city = "bengaluru";
  }
}
let value = new AxisBank("SBI", "bengaluru");
console.log(value);
