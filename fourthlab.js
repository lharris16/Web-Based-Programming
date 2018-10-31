//Form
var email = false;
var password = false;

function formvalidation() {
	var box = document.getElementsByName(sport);
	var isChecked = false;
	var confirm = false;
    for (var i = 0; i < box.length; i++) {
        if (box[i].checked) {
            checked = true;
        }
    }
    if (!checked) {
    	alert('One checkbox muxt be checked.');
    }
    else if (!email){
    	alert ("Enter a valid email.");
    }
    else if (!password){
    	alert ("Enter correct password.");
    }
    else {
    	confirm = true;
    }
    return confirm;
}

//Email
function emailvalidation(input) {
	email = /^([A-z]+[A-z0-9]+)@([A-z]+[A-z0-9]+)\.com|org|edu$/;
	if(input.value.match(email)) {
		document.form.email.focus();
		email = true;
	}
	else {
		alert("You have entered an invalid email address!\nexample11@example.com");
		document.form.email.focus();
		email = false;
	}
	return email;
}

//Password
function passvalidation(input) {
	var password1 = document.getElementById('password1').value;
	var password2 = document.getElementById('password2').value;
	var num = /[0-9]/;

	if (input.value != "")
	{
		if(input.value.length < 6) {
			alert("Your password must be at least 6 characters.");
			input.focus();
			password = false;
		}
		// Ensures password contains atleast one number
		else if(!num.test(input.value)) {
			alert("Your password must contain at least one digit (0-9).");
			input.focus();
			password = false;
		}
		else if (password1 !== "" && password2 !== "" && password1 != password2){
			alert("Passwords do not match.");
			document.getElementById('password2').value='';
			password = false;
		}
    else{
    		password = true;
		}
	}
	return password;
}
