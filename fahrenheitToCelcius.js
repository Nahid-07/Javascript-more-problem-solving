// fahrenheit to celcius [(°F-32)×5]/9

function fahrenheitTocelcius(farenhite){
    let celcius = ((farenhite-32)*5)/9; /* this the fahrenheit to celcius formula */
    return celcius;
}
let fahrenheit = 32;
const result = fahrenheitTocelcius(fahrenheit);
console.log(parseFloat(result.toFixed(2)));