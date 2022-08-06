/* simple interest rate and to be paid ammount */

function interestAmont(p,rate,year){
   let interest = (p * rate * year) /100;
   return interest;
}
let principle = +prompt("enter your principle ammount" , "10000");
let interestIssue = +prompt("enter your interest rate(without %)", "10");
let year = +prompt("eneter year", "1");
const result = interestAmont(principle,interestIssue,year);
console.log(result);