/* ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে  */
function CelciustoF(celcius){
    let farenhite =  celcius * 9 / 5 + 32;  /* this is the formula */
    return farenhite;
}
let cel =60;
const result = CelciustoF(cel);
console.log(result);