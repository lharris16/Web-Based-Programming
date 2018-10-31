// assignfive.js
//4.1
function problemOne() {
  var num = 5
  var square = 1;
  var cube = 1;

  document.write("<table>");
  document.write("<tr>", "<th> Number </th>", "<th> Square </th>",
                 "<th> Cube </th>", "</tr>");
  for(i = 5; i <= 15; i++) {
    square = Math.pow(i, 2);
    cube = Math.pow(i, 3);
    document.write("<tr>", "<td>", i , "</td>", "<td>", square , "</td>",
                   "<td>", cube , "</td>", "</tr>");
  }
  document.write("</table>");
}

//4.2
function problemTwo() {
  var num = 1;
  var numPrevious = 0;
  var holder = 1;

  for (i = 1; i < 20; i++) {
    document.write(num, ", ");
    holder = num;
    num = num + numPrevious;
    numPrevious = holder;
  }
  document.write(num);
}

//4.3
function problemThree() {
  var responseOne = prompt("Enter a number.");
  var responseTwo = prompt("Enter another number.");
  var responseThree = prompt("Enter the last number.");

  var largestNum = Math.max(responseOne, responseTwo, responseThree);
  document.write("Your largest number was ", largestNum, ".");
}

//4.4
function problemFour() {
  var userNum = prompt("Please enter a number for Fibonacci.");
  var num = 1;
  var numPrevious = 0;
  var holder = num;

  for (i = 1; i < userNum; i++) {
    holder = num;
    num = num + numPrevious;
    numPrevious = holder;
  }
    document.write("In place ", userNum, ", the Fibonacci number is ",
                   num, ".");
}
