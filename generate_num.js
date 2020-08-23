
//here we can  generate a number  between a maximum(n) & minimum(n);
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
  console.log(randomRange(8,5));
  //generate a random decimal(n)
function decimal(){
    return Math.random();
}
console.log(decimal());
//generate a whole random number from 0-mynumber
function number(n){
    return Math.floor(Math.random() * n);
}
console.log(number(20));