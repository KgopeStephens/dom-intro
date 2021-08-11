// get a reference to the textbox where the bill type is to be entered
const billTypeElement = document.querySelector(".billTypeText");
const addToBillElement = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");
//get a reference to the add button
const textBillAddBtn = document.querySelector(".textBillAddBtn");
//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
//add an event listener for when the add button is pressed
textBillAddBtn.addEventListener('press', textBillAddBtnPressed);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
function textBillTotal(){
    var billTypeEntered = billTypeText.value.trim();
    if (billTypeEntered === "bill"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
