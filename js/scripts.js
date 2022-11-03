//let testNumber = 1234

//function numberToString(numberIn) {
 // return numberIn.toString();
//}

//let numberString = numberToString(testNumber);


//function splitString (stringIn) {
 // return stringIn.split("");
//}

//let stringArray = splitString (numberString);

//function arrayOfNumbers (arrayIn) {
//  let numberArray = arrayIn.map(function(place) {
//    return parseInt(place)
  
//
//})
//return numberArray
//}

//let numberArray = [];

  function rogNum(number) {
    let numberArray = [];
  for (let index = 0; index <= number; index++) {
    rogSay(index)
    numberArray.push(rogSay(index));
  }
  return numberArray
  }
  const beep = "beep!";
  const boop = "boop!";
  const neighbor = "Won't you be my neighbor?";

    function rogSay(index) {
      index.toString()
      const stringIndex = index.toString()
    if (stringIndex.includes("3")) {
      return neighbor;
    } else if (stringIndex.includes("2")) {
      return boop;
    } else if (stringIndex.includes("1")) {
      return beep;
    } else {
      return stringIndex;
    } 
  }

  window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("submit" , rogSay1);
  });

  function rogSay1(event) {
    event.preventDefault();

    const input = document.getElementById("input").value;

    const elementSelect = document.querySelector('h3#result');
    document.getElementById('result').innerText = rogNum(input);
  }

