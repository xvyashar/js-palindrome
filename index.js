const { yellow, blue, green } = require("kleur");

console.log(yellow("--------------- PALINDROME CHALLENGE ---------------"));

const [_bin, _file, input] = process.argv;

const numRegex = /^\d*$/; // positive & integer numbers

if (!numRegex.test(input)) throw new Error("Invalid input!");

const reverseNumber = (num) =>
  parseInt(num.toString().split("").reverse().join(""));
const isPalindrome = (num) => +num === reverseNumber(num);

let resultNum = +input;
do {
  const sum = resultNum + reverseNumber(resultNum);
  console.log(
    `${blue(resultNum)} ${yellow("+")} ${blue(
      reverseNumber(resultNum)
    )} ${yellow("->")} ${blue(sum)}`
  );
  resultNum = sum;
} while (!isPalindrome(resultNum));

console.log(`${yellow("Palindrome: ")}${green(resultNum)}`);
