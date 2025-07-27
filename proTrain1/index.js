// let name = "علی";
// let age = 25;
// let message = "نام من " + name + " است و " + age + " سال دارم.";
// console.log(message);
// let x = 10;
// let y = 5;
// let result = x * 2 + y - 3;
// console.log(result);
// let a = 4;
// let b = 3;
// let c = 2;
// let result2 = a + b * c - (a % b);
// console.log(result2);
// let name = "سارا";
// let age = 20;
// let info = name + " " + (age + 5) + " ساله است";
// console.log(info);
// let score = 12;
// score += 5;
// score *= 2;
// score -= 4;
// console.log(score);
// let result3 = 10 + "5" + 3;
// console.log(result3);
// let fruits = ["سیب", "موز", "پرتقال"];
// console.log(fruits.length, fruits[1]);
// let numbers = [10, 20, 30, 40];
// numbers[2] = 50;
// console.log(numbers);
function add(a, b) {
  return a + b;
}
const res = add(2, 2);
console.log(res);
console.log("==============");
function isEven(number) {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log("true");
    } else {
      console.log(false);
    }
  }
  return number;
}
isEven();
console.log("==============");
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));
console.log("==============");
const reverse = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverse("خنگ "));
console.log("==============");

function findMax() {
  const numbers = [3, 8, 2, 10, 5];
  const max = Math.max(...numbers);
  return max;
}

console.log(findMax()); // اینجا خروجی: 10
console.log("==============");

function palindromeChecker(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(palindromeChecker("hello"));
console.log(palindromeChecker("level"));
console.log(palindromeChecker("egg"));

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzBuzz";
  }
  if (num % 3 === 0) {
    return "fizz";
  }
  if (num % 5 === 0) {
    return "buzz";
  } else {
    return num;
  }
}
console.log(fizzBuzz(10));
