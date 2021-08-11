
const calculateBttmElement = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringField= document.querySelector(".billString");
const billTotalSpanElement= document.querySelector(".total");

function totalPhoneBill(billString){
  // var billString = billStringField.value;
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
 
 //round to two decimals
 var roundedBillTotal = billTotal.toFixed(2);
 return roundedBillTotal;
}

 function calculateBtnClicked(){
  // logic goes here
  var billString = billStringField.value;
  const roundedBillTotal= totalPhoneBill(billString);
  billTotalElement.innerHTML = roundedBillTotal;

  // var billItems = billString.split(",");
  const currentTotal=Number(roundedBillTotal);

   billTotalSpanElement.classList.remove("danger");
   billTotalSpanElement.classList.remove("warning");

   if(currentTotal>=30){
   //make the total red
   billTotalSpanElement.classList.add("danger");
  } else if(currentTotal>=20 && currentTotal<30){
    //make the total orange
    billTotalSpanElement.classList.add("warning");
  }
  // a variable for the total phone bill.
  // var billTotal = 0;
  // //loop over all the bill items
  // for (var i=0;i<billItems.length;i++){
  //     var billItem = billItems[i].trim();
  //     if (billItem === "call"){
  //         billTotal += 2.75;
  //     }
  //     else if (billItem === "sms"){
  //         billTotal += 0.75;
  //     }
  // }
  
  // //round to two decimals
  // var roundedBillTotal = billTotal.toFixed(2);
 
}

calculateBtn.addEventListener('click', calculateBtnClicked);

