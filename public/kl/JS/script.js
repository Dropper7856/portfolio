function onMyFrameLoad(source) {
	document.getElementById("divpanel").style.display = "none";

}

function timeFunction() {
	setTimeout(function () {
		document.getElementById("divpanel").style.display = "none";
		document.getElementById("FormDivId").style.display = "block";
	}, 500);
}

function ToggleStartStop() {
   var background_tr = document.getElementById('background');
   background_tr.classList.toggle('background_Started');
   const btn = document.getElementById("btnstart");
   if(btn.innerText === "START"){
        btn.innerText = "STOP";
        btn.classList.remove('startcolor');
        btn.classList.add('stopcolor');
    }else{
        btn.innerText= "START";
        btn.classList.remove('stopcolor');
        btn.classList.add('startcolor');
    }
}

function SetSettingsText(ordervalue, takeprofit, stoploss, breakevent,trailingstop, nborder){
	document.getElementById('settingstext').innerHTML = "Order value: " + ordervalue + "     |     Take Profit: " + takeprofit + "     |     Stop Loss: " + stoploss + "     |     Break Event: " + breakevent + "     |     Trailing Stop: " + trailingstop + "     |     Orders per day: " + nborder;

}

function HideSettingsMenu(){
	if(document.getElementById('settingsMenu').style.display === 'none'){
		document.getElementById('settingsMenu').style.display = 'block';
	}
	else{
		document.getElementById('settingsMenu').style.display = 'none';
	}
}

function SetBool(id, bool){
if(bool === "true"){
	document.getElementById(id).checked = true;
}
else{
	document.getElementById(id).checked = false;
}
}

function GetTrend(){
	var elmnt = document.getElementsByClassName("speedometerSignal-DPgs-R4s").innerText;
	console.log(elmnt);
}

function toggledisplay(elementID)
    {
    var x = document.getElementById(elementID);
        if (x.style.display === "none") {
        x.style.display = "inherit";
    } else {
        x.style.display = "none";
  }
    }


function checkDisplay(id){
	if(document.getElementById(id).style.display == 'inherit'){
		document.getElementById(id).style.display = 'none';
		document.getElementById('settingsID').style.display = 'inherit'
	}
}

function GetInputValue(id){
	var x = document.getElementById(id).value
	return x;
}

function SetInputValue(id, value){
	document.getElementById(id).value = value;
}

function SetChecksymbol(id, delay, txt, symbtxt, idInput){
	document.getElementById(id).textContent = symbtxt;
	setTimeout(function(){ document.getElementById(id).textContent = txt; $("#" + idInput).val(""); }, delay);
	
}

function SetPlaceholder(id, text){
    document.getElementById(id).placeholder=text;
}

function addOrder(symbols,priceStart,priceStop,start,stop,volume,type,bk,ts,sl,tp,profit){
    const orderTr = document.createElement("tr");
    const orderTd_symbols = document.createElement("td");
    const orderTd_priceStart = document.createElement("td");
    const orderTd_priceStop = document.createElement("td");
    const orderTd_start = document.createElement("td");
    const orderTd_stop = document.createElement("td");
    const orderTd_volume = document.createElement("td");
    const orderTd_type = document.createElement("td");
    const orderTd_bk = document.createElement("td");
    const orderTd_ts = document.createElement("td");
    const orderTd_sl = document.createElement("td");
    const orderTd_tp = document.createElement("td");
    const orderTd_profit = document.createElement("td");
    document.getElementById('orderList').appendChild(orderTr);
    
    orderTr.appendChild(orderTd_symbols);
    orderTr.appendChild(orderTd_priceStart);
    orderTr.appendChild(orderTd_priceStop);
    orderTr.appendChild(orderTd_start);
    orderTr.appendChild(orderTd_stop);
    orderTr.appendChild(orderTd_volume);
    orderTr.appendChild(orderTd_type);
    orderTr.appendChild(orderTd_bk);
    orderTr.appendChild(orderTd_ts);
    orderTr.appendChild(orderTd_sl);
    orderTr.appendChild(orderTd_tp);
    orderTr.appendChild(orderTd_profit);
    
    orderTd_symbols.innerHTML = symbols;
    orderTd_priceStart.innerHTML = priceStart;
    orderTd_priceStop.innerHTML = priceStop;
    orderTd_start.innerHTML = start;
    orderTd_stop.innerHTML = stop;
    orderTd_volume.innerHTML = volume;
    orderTd_type.innerHTML = type;
    orderTd_bk.innerHTML = bk;
    orderTd_ts.innerHTML = ts;
    orderTd_sl.innerHTML = sl;
    orderTd_tp.innerHTML = tp;
    orderTd_profit.innerHTML = profit;
    orderTd_profit.style.color = "red";
}

function removeOptions(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}