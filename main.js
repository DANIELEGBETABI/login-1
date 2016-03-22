// var userName = $('.username').val();
// var password = $('.password').val();
// var emailRegex = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$';
var login = $('.login-form');
// var tiyUrl = 'http://* theironyard.com';//or
var userName = $('.username').val();
var password = $('.password').val();
var emailPattern = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$';
//target form 


login.on('submit', function(e){
	e.preventDefault();
	//check for empty email field and proper email address. indexOf will not catch "@bob$" or "bob@smith"
	if((!$('.username').val())||($('.username').val().indexOf('@')===-1)) {
        alert("Please enter a valid email address before logging in.");
        return;	
     }
      //i get alert anyway no matter what I do. I cannot find my error. and i can't go further.
     //stopping here so i can start contact form

	//empty password (but it was not letting any valid ones through)
	else if(password==='') {
		alert("Please enter your password.")
	}
	(isUserValid(userName));
	(isPasswordValid(userName,password));
});





function isUserValid(uName){
	if((userName==='aaron@theironyard.com')||(userName==='admin@google.com')){
		return;
	} else{
		alert("The username is invalid.");
	}
};


function isPasswordValid(uName,password){
	if(((userName==='aaron@theironyard.com') && (password==='password123'))||((userName==='admin@google.com') && (password==='pandas'))) {
		$(location).attr('href','http://www.theironyard.com');
		return;
	} else{
		alert("The password is not valid.");
	}
};
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//I can't get this regex to work or figure out how to get it in my program
// function isEmail(uName) {
// 	var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
// 	return pattern.test(uName)
// };
// if(!isEmail(userName)){
// 	alert("Please enter a valid email address before logging in.");
// }



