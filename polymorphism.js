class moblie {
  beyProduct() {
    console.log("I am beying aproduct ");
  }
}
class samsung extends moblie {
  beyProduct() {
    console.log("I am going bey a samsung product ");
  }
}
class iphone extends moblie {
  beyProduct() {
    console.log("I am going to bey a iphone product ");
  }
}
let value1 = new samsung();
value1.beyProduct();
let value2 = new iphone();
value2.beyProduct();
