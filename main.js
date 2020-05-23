var standard, metric,num2,result ,display;
var standardWeight, standardHeight, metricWeight, metricHeight;
//Assigning the values of the elements gotten from HTML to a JS element
  standard = document.getElementById('first');
  metric = document.getElementById('second');

  display = document.getElementById('display')

  function displayM() {
    metric.style.display = "none"
    standard.style.display = "block"
  }
  //Removes the KG - Cm Coverter
  function display2() {
    standard.style.display = "none"
    metric.style.display = 'block'
  }

  //Function for the KG- CM converter
  function standardCalc(standardWeight, standardHeight) {
    //Gets the user input
    standardWeight = document.getElementById('Sweight').value;
    standardHeight = document.getElementById('Sheight').value;

    result = standardWeight/Math.pow((standardHeight/100),2);
    num2 = result.toFixed(2)//Makes it at most 2 decimal places
    if (result == NaN){
      display.innerHTML = "Invalid";
    }
    else if(result == Infinity){display.innerHTML = "Invalid ";}
   else{display.innerHTML = parseFloat(num2);}
  }

  function metricCalc(metricWeight, metricHeight) {
    metricWeight = document.getElementById('Mweight').value;
    metricHeight = document.getElementById('Mheight').value;

    result = 703 * metricWeight/Math.pow(metricHeight,2);
    num2 = result.toFixed(2)//Makes it at most 2 decimal places
    if (result == NaN){//If the result is not a number
      display.innerHTML = "Invalid";
    }
    else if(result == Infinity){display.innerHTML = "Invalid ";}
   else{display.innerHTML = parseFloat(num2);}

  }