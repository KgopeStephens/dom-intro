
const billTypeElement = document.querySelector(".billTypeText");
const addToBillElement = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;
const textBillAddBtn = document.querySelector(".textBillAddBtn");
//textBillAddBtn.addEventListener('press', textBillTotal)

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

        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);

