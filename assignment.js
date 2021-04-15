class KioskCalc {
    constructor(fruit,quantity,price){
this.fruit = fruit;
this.quantity = quantity;
this.price = price;


    }
    getTotalCost(){
      return `I will buy ${this.quantity} ${this.fruit} for KES ${this.quantity * this.price} `  
    }

}
var KioskCalc1 = new KioskCalc("oranges", 3, 30);
var KioskCalc2 = new KioskCalc("apples", 4, 15);
var KioskCalc3 = new KioskCalc("avocado", 6, 20);

console.log(KioskCalc1.getTotalCost());
console.log(KioskCalc2.getTotalCost());
console.log(KioskCalc3.getTotalCost());