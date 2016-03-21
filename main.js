// var userName = $('.username').val();
// var password = $('.password').val();
// var emailRegex = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$';
var login = $('.login-form');
// var tiyUrl = 'http://* theironyard.com';//or
//window.replace('http://* theironyard.com', url)//$(location).attr('href','http://* theironyard.com');
//************************************//
//           USERNAME                 //
//************************************//
//user enters his/her email address
//1 program checks to see if it's an email address we have
//2 if they try to leave it empty: 
//	Please enter an email address before logging in.
//3in this situation, compares to two names. 
//4enter will take to the next field?
// password


//target form 
login.on('submit', function(e){
	e.preventDefault();
	var userName = $('.username').val();
	var password = $('.password').val();

	if((userName==='')||(userName.indexOf('@')===-1)){
		alert("Please enter an email address before logging in.");
	 }
	 else if(password==='') {
	 alert("Please enter your password.");
	 }
});
	 // else{//tar	get each field indiv
	 	// if((userName==='aaron@theironyard.com')&&(userName==='password123')){
	 	// 	$(location).attr('href','http://www.theironyard.com');
	 	// }
	 	// else if ((userName==='aaron@theironyard.com')&&(userName!=='password123')){
	 	// 	alert('The password you entered is incorrect.');
	 	// }
	 	// else if ((userName!=='aaron@theironyard.com')&&(userName==='password123')){
	 	// 	alert('The username you entered is invalid.');
	 	// }
	 	// else if((userName==='admid@google.com')&&(userName==='pandas')){
	 	// 	$(location).attr('href','http://* theironyard.com');
	 	// }
	 	// else if ((userName==='admin@google.com')&&(userName!=='pandas')){
	 	// 	alert('The password you entered is incorrect.');
	 	// }
	 	// else if ((userName!=='admin@google.com')&&(userName==='pandas')){
	 	// 	alert('The username you entered is invalid.');
	 	// }
	 	// else {
	 	// 	alert('We have no record of this user.');
	 	// }
	 // }
// });
///OR (BECAUSE THAT SEEMS TO WORDY)
function isUserValid(userName){
	if((username==='aaron@theironyard.com')||(userName==='admin@google.com')){
		return true;
	} else{
		alert("User was not found.");
	}
};
function isPasswordValid(userName,password){
	if(username==='aaron@theironyard.com' && password==='password123')||(userName==='admin@google.com') && (password==='pandas'){
		return true;
	} else{
		alert("The password you entered is not valid.");
	}
};









