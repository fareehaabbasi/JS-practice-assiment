// //Question no:1
// let result = 10 + 5 * 2;
// console.log(result);
// //Ans: 20


// //question no: 2
// let result2 = (20-5) / 3;
// console.log(result2);
// //Ans: 5


// //question no: 3
// let result3 = 15 % 4;
// console.log(result3);
// //Ans: 3


// //question no: 4
// let result4 = 8 + 2 * (10 / 2);
// console.log(result4);
// //Ans: 18

// //question no: 5
// let result5 = 12 - 4 + 3 * 2;
// console.log(result5);
// //Ans: 14


// //Question no:6
// //Add 25 and 30, then multiply the sum by 2.
// let question = (25 + 30) * 2;
// console.log(question);
// //Ans: 110


// //Question no:7
// //Subtract 15 from 50, then divide the result by 5.
// let question1 = (15 - 50) / 5;
// console.log(question1);
// //Ans: -7


// //Question no:8
// //Find the remainder when 45 is divided by 7.
// let remainder = 45 % 7;
// console.log(remainder);
// //Ans: 3


// //Question no:9
// //Multiply 8 by 3, then add 10 to the result.
// let add = 8 * 3 + 10;
// console.log(add);
// //Ans: 34



// //Question no:10
// //are the number 6 using the exponentiation operator (**)
// let add1 = 6;
// add1 = add1**
// console.log(add1);
// //Ans: 6

// console.log((5 * 2) / 2 + 1);


// let studentPresent = ("ali")
// let Name = prompt("Name of the student");

// if(Name === studentPresent) {
//     console.log("this student is present");
// }else{
//     console.log("this students is absent");
    
// }


let totalMark = +prompt("How much total marks?");
let obtainedMarks = +prompt("How much obtained marks?");

let percentage = (totalMark / obtainedMarks) * 100;

if (percentage >= 90) {
  console.log("Your Percentage is 90%. Congratulation, You Pass in First division");
} else if (percentage >= 80) {
  console.log("Your Percentage is 80%. Congratulation, You  pass in second division");
} else if (percentage >= 70) {
  console.log("Your Percentage is 70%. Congratulation, You  pass in second division");
} else if (percentage >= 60) {
  console.log("Your Percentage is 60%. Congratulation, You  pass in second division");
} else if (percentage >= 50) {
  console.log("Your Percentage is 50%. Congratulation, You  pass in second division");
} else if (percentage >= 50) {
  console.log("Your Percentage is 40%. Congratulation, You  pass in second division");
} else if (percentage >= 35) {
  console.log("Your Percentage is 35%. Congratulation, You  pass in third division");
} else {
  console.log("Sorry, You are fail. Please try again");
}

