/* ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।  */

function getGrade(marks){
    if(marks>=80){
        return "Congratulation you got A+";
    }else if(marks>=70 && mark <= 79){
        return "Congratulation you got A";
    }else if(marks >=60 && marks <= 69){
        return "Congratulation you got A-";
    }else if(marks>=50 && marks <= 59){
        return "Congratulaions you got B";
    }else if(marks >= 40 && marks <= 49){
        return "Congratulations you got C";
    }else if(marks >= 33 && marks <=39){
        return "Congratulations you got D";
    }else{
        return "Your grade is F";
    }
}
let mark = 32;
const result = getGrade(mark);
console.log(result);