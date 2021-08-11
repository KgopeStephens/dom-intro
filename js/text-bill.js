
const billTypeField = document.querySelector(".billTypeText");
const addToBillElement = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;
const textTotalAddBtn = document.querySelector(".textBillAddBtn");
//textBillAddBtn.addEventListener('press', textBillTotal)

function totalPhoneBill(billString){
    var billItems = billString.split(",");
   
    var billTotal = 0;
    
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    var roundedBillTotal = billTotal.toFixed(2);
    return roundedBillTotal;
   }

function textBillTotalClicked(){
    var billTypeText = billTypeField.value.trim();
    if (billTypeText === "call"){
        callsTotal += 2.75
    }
    else if (billTypeText === "sms"){
        smsTotal += 0.75;
    }
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");
    if (totalCost >= 50){

        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotalClicked);

