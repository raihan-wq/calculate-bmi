//concnect with js dom
// var wlable = document.getElementById('wlabel');
var winput = document.getElementById('weight-input');
// var hlable = document.getElementById('hlabel');
var hinput = document.getElementById('height-input');
var calculate = document.getElementById('btn-success');
var reset = document.getElementById('btn-reset');
var result = document.getElementById('dynamic__bmi');
var messege = document.getElementById('bmi_text');

// find the function 

function bmiCalculate(){
  let wvalue,hvalue,bmi,mes; //  find the input
  wvalue = Number(winput.value); // add value with id
  hvalue = Number(hinput.value);
  // now implement our formula of bmi
  //   bmi = weight / (height * 0.0254 * height * 0.0254);
  bmi = wvalue / (hvalue * 0.0254 * hvalue * 0.0254);
  // now this bmi show in result 
  result.textContent = bmi.toFixed(2);
  // now show the textmessege
  mes = showmessege(bmi);
  messege.textContent = mes;

}
// now make a function to show messege for bmi
function showmessege(bmiValue){
    if(bmiValue < 16){
        return   "You are Severe Thin";

    }else if(bmiValue >= 16 && bmiValue <= 17){
        return "You are Moderate Thin"
    }else if(bmiValue > 17 && bmiValue <= 18.5){
        return "You are Mid Thin"
    } else if(bmiValue > 18.5 && bmiValue <= 25){
        return "You are Normal"
    } else if(bmiValue > 25){
        return "You are Overweight"
    }

}

// it is reset function
function bmireset(){

    // this all conntent show empty when click reset
    winput.value = "";
    hinput.value = "";
    result.textContent = "________________";
    messege.textContent = "";


}
// need to add event handeler
// because if any information 
// if empty it will noe show
// and automatic reset
function eventHandler(){
    if(Number(winput.value) && Number(hinput.value)){
        bmiCalculate()
    } else {
        alert("Please provide valid inputs");
        bmireset();
    }
}

// bind function to eventlistener
calculate.addEventListener('click',eventHandler);
reset.addEventListener('click',bmireset);