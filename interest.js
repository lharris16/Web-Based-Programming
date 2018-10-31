// Create a money number formatter by subclassing the NumberFormat class
// for US currency (no bugs here)
var moneyFormatter = new Intl.NumberFormat('en-US',
   { style: 'currency', currency: 'USD' }
);


/**
 * Validate response
 *
 * @return {true} if field is valid, {false} otherwise
 */
function validResponse(change) {
   var textbox = change.currentTarget;
   var validValue = true;
   if ( isNaN(parseInt(textbox.value)) ) {
      alert(textbox.value + " is not a valid value.");
      textbox.focus();
      textbox.value = "";
      validValue = false;
   }
   if (validValue) {
     compute();
   }
}


/**
 * Compute future value and display on page
 */
function compute() {
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var balance = document.getElementById("balance").value;

   // If all of the fields have something in them, compute and display
   // the future value; otherwise we do nothing
   if (rate && years && balance) {
      // Display the value formatted as $999.99
      document.getElementById("total").innerHTML = moneyFormatter.format(
         // Forumula is Future = initialbalance * (1 + rate/12) ^ (12*years)
         // assumes rate is given as a whole number (e.g., 3 is .03) so
         // convert to fractional value in the equation
         balance * Math.pow((1 + (rate/100.0)/12), (years*12))
      );
   }
}
