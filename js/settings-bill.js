
var radioBillAddButton = document.querySelector('.radioBillAddButton');
var updateSettings = document.querySelector('.updateSettings');

var callCostSettingElem = document.querySelector('.callCostSetting');
var smsCostSettingElem = document.querySelector('.smsCostSetting');
var warningLevelSettingElem = document.querySelector('.warningLevelSetting');
var criticalLevelSettingElem = document.querySelector('.criticalLevelSetting');


var callTotalSettingsElem = document.querySelector('.callTotalSettings');
var smsTotalSettingElem = document.querySelector('.smsTotalSettings');
var totalSettingsElem = document.querySelector('.totalSettings');

var callsTotalSet = 0;
var smsTotalSet = 0;
var totalCost = 0;


updateSettings.addEventListener('click', function(){

   
    var callCostSetting = callCostSettingElem.value;
    if(parseInt(callCostSetting)<= 29)
    {
        callsTotalSet += parseInt(callCostSetting);
    }

    var smsCostSetting = smsCostSettingElem.value;
    if(parseInt(smsCostSetting)<= 29)
    {
        smsTotalSet += parseInt(smsCostSetting);
    }
    
    var warningLevelSetting = warningLevelSettingElem.value;
    if(parseInt(smsCostSetting)>= 30 || parseInt(smsCostSetting)< 60)
    {
        totalCost += parseInt(warningLevelSetting);
    }
    
    var criticalLevelSetting = criticalLevelSettingElem.value;;
    if(parseInt(smsCostSetting)>= 60)
    {
        totalCost += parseInt(criticalLevelSetting);
    } 
 
});


radioBillAddButton.addEventListener('click', function(){
         

    var billItemTypeWithSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        var billItemType = billItemTypeWithSettings.value
        // billItemType will be 'call' or 'sms'
      
        if (billItemType === "call"){
            callsTotalSet += 2.75
        }
        else if (billItemType === "sms"){
            smsTotalSet += 0.75;
        }
        
        //update the totals that is displayed on the screen.
        callTotalSettingsElem.innerHTML = callsTotalSet.toFixed(2);
        smsTotalSettingElem.innerHTML = smsTotalSet.toFixed(2);
        totalCost = callsTotalSet + smsTotalSet;
        totalSettingsElem.innerHTML = totalCost.toFixed(2);
        
        
        if (totalCost >= 50){
            // adding the danger class will make the text red
            totalSettingsElem.classList.add("danger");
        }
        else if (totalCost >= 30){
            totalSettingsElem.classList.add("warning");
        }
    
});
