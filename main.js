var standard, metric,num2,result ,display;
var standardWeight, standardHeight, metricWeight, metricHeight;

  standard = document.getElementById('first');
  metric = document.getElementById('second');

  display = document.getElementById('display')

  function displayM() {
    metric.style.display = "none"
    standard.style.display = "block"
  }
  function display2() {
    standard.style.display = "none"
    metric.style.display = 'block'
  }

  function standardCalc(standardWeight, standardHeight) {
    standardWeight = document.getElementById('Sweight').value;
    standardHeight = document.getElementById('Sheight').value;

    result = standardWeight/Math.pow((standardHeight/100),2);
    num2 = result.toFixed(2)
    if (result == NaN){
      display.innerHTML = "Error";
    }
    else if(result == Infinity){display.innerHTML = "Error";}
   else{display.innerHTML = parseFloat(num2);}
  }

  function metricCalc(metricWeight, metricHeight) {
    metricWeight = document.getElementById('Mweight').value;
    metricHeight = document.getElementById('Mheight').value;

    result = 703 * metricWeight/Math.pow(metricHeight,2);
    num2 = result.toFixed(2)
    if (result == NaN){
      display.innerHTML = "Error";
    }
    else if(result == Infinity){display.innerHTML = "Error";}
   else{display.innerHTML = parseFloat(num2);}

  }
