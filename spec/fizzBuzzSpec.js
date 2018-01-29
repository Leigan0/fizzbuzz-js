describe("FizzBuzz", function() {
  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when a number is', function(){
    it("divisible by three",function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
    it("divisible by five", function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('divisible by three & five',function(){
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });
  describe('it knows when a number is NOT', function(){
    it('divisible by three', function(){
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
    it('divisible by five', function(){
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });
    it('divisible by three & five',function(){
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });
  describe('when playing, it says', function(){
    it('"Fizz" when a number is divisible by three', function(){
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
    it('"Buzz" when a number is divisible by five', function(){
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });
    it('"FizzBuzz" when a number is divisible by fifteen', function(){
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });
    it('"number given" when a number is not divisible by three or five', function(){
      expect(fizzbuzz.says(1)).toEqual(1);
    });
  });
});
