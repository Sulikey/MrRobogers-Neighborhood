

window.addEventListener("load", function() {

  const form = document.getElementById("count");
  form.addEventListener("submit", countDracula);

});

//-------------------------------------------------------------
   function countDracula(event) {
  event.preventDefault();
  
  let testNumber = 1234

function numberToString(numberIn) {
  return numberIn.toString();
}

let numberString = numberToString(testNumber);


function splitString (stringIn) {
  return stringIn.split("");
}

let stringArray = splitString (numberString);

function arrayOfNumbers (arrayIn) {
  let numberArray = arrayIn.map(function(place) {
    return parseInt(place)
  

  })
return numberArray
}

  const num1 = parseInt(document.querySelector("input#input1").value);
  const num2 = parseInt(document.querySelector("input#input2").value);

if (num2 > num1) {
document.getElementById("output").innerText = ("Please make 'count' larger than 'multiples of'")
}

else if (num1 === isNaN() || num2 === isNaN()) {
document.getElementById("output").innerText = ("Please only use real numbers")
}

else if (num1 < 1 || num2 < 1) {
document.getElementById("output").innerText = ("Please only use numbers of value '1' or more");
}


else {

  let newArray = []
  for (let index = 0; index <= num1; index += num2)
  {newArray.push([index])
  }
  document.getElementById("output").innerText = (newArray)
}
   }

   