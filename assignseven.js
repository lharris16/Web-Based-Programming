//6.1
function text() {
  document.write("I attend George Fox University. My major is Information \
  Systems within the College of Engineering. I play on the Women's Soccer \
  team at George Fox University under the coaching of Cory Hand. My current \
  standing is sophomore and I will graduate in 2020.")
}

//6.2
function move(event) {
  var dom = document.getElementById("picture").style;
  var direction = event.CurrentTarget;

  if(direction.value == "Northwest") {
    dom.top = 415 + "px";
    dom.left= 8 + "px";
  }
  else if(document.getElementById("Northeast") == "Northeast") {
    dom.top = 415 + "px";
    dom.left= 1240 + "px";
  }
  else if(document.getElementById("Southwest") == "Southwest") {
    dom.top = 475 + "px";
    dom.left= 8 + "px";
  }
  else if(document.getElementById("Southeast") == "Southeast") {
    dom.top = 475 + "px";
    dom.left= 1240 + "px";
  }
}

//6.8
function movepicture(event) {
  var x = event.clientX;
  var y = event.clientY;

  document.getElementById("pic").style.left = (x) + "px";
  document.getElementById("pic").style.top = (y + 300) + "px";
}

//6.9
var move = true;
function movetext() {
   var text = document.getElementById("text");
   var left = parseInt(text.style.left);

   if (isNaN(left)) {
      left = 0;
   }

   if (left + 218 >= 1330) {
      move = false;
   }
   else if (left <= 0) {
      move = true;
   }

   if (move) {
      left += 1;
   }
   else {
      left -= 1;
   }
   text.style.left = left + "px";
}

//6.10
var change = true;
function changecolor() {
   var text = document.getElementById("color");
   var left = parseInt(text.style.left);

   if (isNaN(left)) {
      left = 0;
   }

   if (left + 218 >= 1330) {
      change = false;
   }

   else if (left <= 0) {
      change = true;
   }

   if (change) {
      left += 1;
   }
   else {
      left -= 1;
   }

   if (left % 5 == 0) {
      if (text.style.color == "red") {
         text.style.color = "blue";
      }
      else {
         text.style.color = "red";
      }
   }
   text.style.left = left + "px";
}
