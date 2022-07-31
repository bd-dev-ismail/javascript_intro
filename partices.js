// Problem 1: Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
// help Harry calculate how much money the shopkeeper will return.
var momGive = 1000;
var orangesPrice = 400;
var applesPrice = 300;
var totalCost = orangesPrice + applesPrice;
var shopkeeperReturn = momGive - totalCost;
// console.log(momGive);
// console.log(totalCost);
// console.log(shopkeeperReturn);
//problem-2
//Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
var sub1 = 75.25;
var sub2 = 65;
var sub3 = 80;
var sub4 = 35.45;
var sub5 = 99.50;
var numOfSub = 5;
var sumOfSub = sub1 +  sub2 + sub3 + sub4 + sub5;
var avg = sumOfSub / numOfSub;
avg = avg.toFixed(2);
// console.log(sumOfSub);
// console.log(avg);
//Problem-3
//John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings and print them in one line. Help John write the program.
var firstLine = 'I am going to be';
var secondLine = 'an awesome web developer'
// console.log(firstLine + ' ' + secondLine);

//Problem-4
//Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program.
var num = 119;
var dividedNum = 5;
console.log(num%dividedNum);