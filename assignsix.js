// assignsix.js
var totalSum = 0.0;
var moneyFormatter = new Intl.NumberFormat('en-US',
   { style: 'currency', currency: 'USD' }
);

//5.3
function totalPrice(expense) {
  var cost= parseFloat(expense.value);
  if (expense.checked) {
    totalSum = totalSum + cost;
  }
  else if (expense.checked == false) {
    totalSum = totalSum - cost;
  }
}

function submitForm () {
  var totalOrder = totalSum + (totalSum * .05);
  alert("Your total cost is " + moneyFormatter.format(totalOrder));
  return false;
}


//5.4
function totalPrice2() {
  var applePrice = document.getElementById("Apple").value;
  var orangePrice = document.getElementById("Orange").value;
  var bananaPrice = document.getElementById("Banana").value;

  var cost = (applePrice * .59) + (orangePrice * .49) + (bananaPrice * .39);
  var totalOrder = cost + (cost * .05);
  alert("Your total cost is " + moneyFormatter.format(totalOrder));
}

//5.5
function validValue(numInput) {
  var numCheck, text;
  numCheck = numInput.value

  if(isNaN(numCheck) || numCheck < 0 || numCheck > 99) {
    alert(numCheck + " is not a valid value. Enter a number between 0 and 99.");
      numInput.value = "";
  }
}

function totalPrice3() {
  var applePrice = document.getElementById("apple").value;
  var orangePrice = document.getElementById("orange").value;
  var bananaPrice = document.getElementById("banana").value;

  var cost = (applePrice * .59) + (orangePrice * .49) + (bananaPrice * .39);
  var totalOrder = cost + (cost * .05);
  alert("Your total cost is " + moneyFormatter.format(totalOrder));
  return false;
}

//5.6
function apple(){
  var appleMax = Number(document.getElementById("App").max);
  var appleMin = Number(document.getElementById("App").min);
  var apple = document.getElementById("App").value;

  if (apple > appleMax || apple < appleMin){
    alert(apple + " is not a valid value. Enter a number between 0 and 99.");
    document.getElementById("App").value = "";
  }
}

function orange(){
  var orangeMax = Number(document.getElementById("Ora").max);
  var orangeMin = Number(document.getElementById("Ora").min);
  var orange = document.getElementById("Ora").value;

  if (orange > orangeMax || orange < orangeMin){
    alert(orange + " is not a valid value. Enter a number between 0 and 99.");
    document.getElementById("Ora").value = "";
  }
}

function banana(){
  var bananaMax = Number(document.getElementById("Ban").max);
  var bananaMin = Number(document.getElementById("Ban").min);
  var banana = document.getElementById("Ban").value;

  if (banana > bananaMax || banana < bananaMin){
    alert(banana + " is not a valid value. Enter a number between 0 and 99.");
    document.getElementById("Ban").value = "";
  }
}

function totalPrice4(){
  var applePrice = document.getElementById("App").value;
  var orangePrice = document.getElementById("Ora").value;
  var bananaPrice = document.getElementById("Ban").value;
  var cost = (applePrice * .59) + (bananaPrice * .39) + (orangePrice* .49);
  var totalSum = cost + (cost * .05);

  alert("Your total cost is " + moneyFormatter.format(totalSum));
  return false;
}
