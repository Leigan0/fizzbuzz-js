function FizzBuzz() {
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

FizzBuzz.prototype.says = function(number) {
  if(this._isDivisibleBy(15, number)) {
    return "FizzBuzz";
  } else if (this._isDivisibleBy(5, number)){
    return "Buzz";
  } else if (this._isDivisibleBy(3, number)){
    return "Fizz"
  } else {
    return number
  }
};

// To print numbers 1 - 100 using this function
var i = 0
fizzbuzz = new FizzBuzz();

while (i < 101) {
  console.log(fizzbuzz.says(i));
  i++;
}

// or

fizzbuzz = new FizzBuzz();
for (var i = 1; i <= 100; i++) {
  console.log(fizzbuzz.says(i))
}
