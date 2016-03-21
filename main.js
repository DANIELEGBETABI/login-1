var userName = $('.user-name');
var password = $('.password');
var emailRegex = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$';
var login = $('.login-form')
//************************************//
//           USERNAME                 //
//************************************//
//user enters his/her email address
//1 program checks to see if it's an email address we have
//2 if they try to leave it empty: 
//	Please enter an email address before logging in.
//3in this situation, compares to two names. 
//4enter will take to the next field?
password


//target form 
login.on('submit', function(){
	// e.preventDefault();
	if (userName.val()===''){
		alert("Please enter an email address before logging in.");
	 }
	 else if (password.val()===''){
	 alert("Please enter your password.");
	 }
	 else{//target each field indive
	 	alert("do next thing, katy.");
	 }
});



