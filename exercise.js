// Create a constructor function called Smartphone that takes in 3 parameters: brand,name, price. To create an object from a constructor function, we use the new keyword. Create two different objects.

function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}
// is it better to use const with objects since you can change the keys inside anyway?
const iphone = new Smartphone("iphone", "11s", "1300$");
const galaxy = new Smartphone("Galaxy", "s20", "1400$");

console.log(iphone);
console.log(galaxy);
