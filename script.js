const inputNumber = document.getElementById("number");
const button = document.getElementById("convert-btn");

const numCheck = () => {
  const numberInt = parseInt(inputNumber.value);
  if (isNaN(numberInt)){ output.textContent = "Please enter a valid number";
  output.classList.add("red");
  return};
  if (numberInt<=0){ output.textContent = "Please enter a number greater than or equal to 1";
  output.classList.add("red");
  return};
  if (numberInt>=4000){ output.textContent = "Please enter a number less than or equal to 3999";
  output.classList.add("red");
  return}
  else{convert()};

};


const convert = () => {
const romanNumbers= ["M","CM","D","CD","C","XC", "L", "XL", "X","IX", "V", "IV","I"];
const arabicNumbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

let romanNumeral = "";

for (let i = 0; i < arabicNumbers.length; i++){
  while(number.value >= arabicNumbers[i]){
    romanNumeral += romanNumbers[i];
    inputNumber.value -= arabicNumbers[i];
  }

output.textContent = romanNumeral;
output.classList.remove("red");

};


} ;




button.addEventListener("click", numCheck);
inputNumber.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){numCheck()}
});
