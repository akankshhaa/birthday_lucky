
const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function comapareValues(sum, luckyNumber){
    if(sum % luckyNumber === 0){
        outputBox.innerText = "Your birthday is lucky!";
    }else{
        outputBox.innerText = "Your birthday is not lucky!";
    }
}

function checkNumberIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    comapareValues(sum, luckyNumber.value)
}

function calculateSum(dob){
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(let i=0; i<dob.length; i++){
        sum += Number(dob.charAt(i));
    }
    return sum;
}

checkNumberButton.addEventListener("click", function getValues(){
    checkNumberIsLucky();
});