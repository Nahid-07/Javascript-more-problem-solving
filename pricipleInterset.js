function interestAmont(p,rate,year){
    let interest = (p * rate * year) /100;
    console.log("your principle ammount :" ,p);
    console.log("your total interest :", interest ,"in", year, "years");
    let total = p + interest
    return total;
 }
 let principle = 55000;
 let interestIssue =7.13;
 let year = 5;
 const result = interestAmont(principle,interestIssue,year);
 console.log("Your total Ammount is :",result);