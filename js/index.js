$(document).ready(function(){
  var $numbers = $("span.number")
  var $operator = $("span.operator")
  var $clear = $("span#clear")
  var $equals = $("span#equals")

  $numbers.click(appendNumber)
  $operator.click(appendOperator)
  $clear.click(clearScreen)
  $equals.click(evaluateEquation)

})

var $screen = $("div#screen")

function appendNumber(){
  var $screenText = $screen.text()
  var $currentNumber = $(this).text()

  $screen.text($screenText + $currentNumber)
}

function appendOperator(){
  var $screenText = $screen.text()
  var $currentOperator = $(this).text()

  if ($screenText === "Error"){
    console.log("Invalid Input")
  } else {
    $screen.text($screenText + $currentOperator)
  }

  $screen.text($screenText + $currentOperator)
}

function clearScreen(){
  $screen.text("")
  // $screen.empty(); can only use in jQ; removes ALL html
}

//method eval()= pass it a string and if its a valid expression it will be converted and arithmetic
function evaluateEquation(){
  var $screenText = $screen.text()

  if ($screenText.includes("x")) {
    $screenText = $screenText.replace("x", "*")
  }
  if ($screenText.includes("÷")){
    $screenText = $screenText.replace("÷", "/")
  }

  var counter = 0

  for (var i = 0; i < $screenText.length; i++) {
    if ($screenText[i] === "+" || $screenText[i] === "-" || $screenText[i] === "*" || $screenText[i] === "/"){
      counter++
    }
  }

  if (counter > 1) {
    $screen.text("Error")
  } else if ($screenText[$screenText.length - 1] === "-" || $screenText[$screenText.length - 1] === "+" || $screenText[$screenText.length - 1] === "*" || $screenText[$screenText.length - 1] === "/"){
    $screen.text("Error")
  } else {
    var result = eval($screenText)
    $screen.text(result)
  }





}

//function checkForError(string)
