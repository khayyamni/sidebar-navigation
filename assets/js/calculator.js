let inputFirst = document.querySelector(".inputs .first");
let inputSecond = document.querySelector(".inputs .second");
let resultCal = document.querySelector(".result input")

let sumNums = document.querySelector(".buttons button:nth-child(1)");
let minusNums = document.querySelector(".buttons button:nth-child(2)");
let multiplyNums = document.querySelector(".buttons button:nth-child(3)");
let dividedNums = document.querySelector(".buttons button:nth-child(4)");




inputFirst.addEventListener("click", function(){
    resultCal.value = "";
})


sumNums.addEventListener("click", function(){
    
    // resultCal.value = parseFloat(inputFirst.value)+ parseFloat(inputSecond.value);

    inputFirst.value = "";
    inputSecond.value = "";
    
})

minusNums.addEventListener("click", function(){
    var a = parseFloat(inputFirst.value);
    var b = parseFloat(inputSecond.value);
    // resultCal.value = a-b;
    // resultCal.innerText=resultCal.value

    inputFirst.value = "";
    inputSecond.value = "";

    
    // resultCal.value = parseFloat(inputFirst.value) - parseFloat(inputSecond.value);
    // resultCal.innerText = resultCal.value
})

multiplyNums.addEventListener("click", function(){
    var a = parseFloat(inputFirst.value);
    var b = parseFloat(inputSecond.value);
    // resultCal.value = a*b;

    inputFirst.value = "";
    inputSecond.value = "";
    
    // resultCal.value = parseFloat(inputFirst.value) * parseFloat(inputSecond.value);
    // resultCal.innerText = resultCal.value
})

dividedNums.addEventListener("click", function(){
    var a = parseFloat(inputFirst.value);
    var b = parseFloat(inputSecond.value);
    // resultCal.value = a/b;

    inputFirst.value = "";
    inputSecond.value = "";
    
    // resultCal.value = parseFloat(inputFirst.value) / parseFloat(inputSecond.value);
    // resultCal.innerText = resultCal.value
})


