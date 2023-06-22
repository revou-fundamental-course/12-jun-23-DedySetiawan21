const numberRegex = /^[0-9]+$/
const inputField = document.getElementById("inputField");
const result = document.querySelector("#result");
const degree = document.querySelector("#inputField");
const convertBtn = document.querySelector("#convert-btn");

inputField.addEventListener('keypress', function(event) {
    if (!numberRegex.test(event.key)) {
        event.preventDefault();
    }   
})

window.addEventListener("load", () => {
    degree.value = "";
    result.innerHTML = "";
  });

convertBtn.addEventListener("click", (e) => {
    convert();
  });
  
  function convert() {
     let inputValue = degree.value;
     var x = document.getElementById("suhu").htmlFor;
        document.getElementById("suhu").innerHTML = x;
        
        if (x === "Celsius")  {
            var CelsiusToFahrenheit = inputValue * (9 / 5) + 32;
            result.innerHTML = `${CelsiusToFahrenheit.toFixed(2)} &deg;f`;
        } else  {
            var FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            result.innerHTML = `${FahrenheitToCelsius.toFixed(2)} &deg;c`; 
        }    
  }


function revFunction() {
    let inputValue = degree.value;
    var x = document.getElementById("suhu").htmlFor;
        document.getElementById("suhu").innerHTML = x;
        var FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    if (x === "Celsius") 
        document.getElementById("suhu").htmlFor = "Fahrenheit";     
    else
        document.getElementById("suhu").htmlFor = "Celsius";

        result.innerHTML = `${FahrenheitToCelsius.toFixed(2)} &deg;c`;
        
}
