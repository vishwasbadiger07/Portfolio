
//MOUSE EVENTS
// onclick event  (index.html) for name
function onclick1() {
    document.getElementById("name").style.color="blue";
}

// ondbclick event (index.html) for college
function ondbclick() {
    document.getElementById("college").style.color="blue";
}

// mouseover event (about.html)
function mouseover(){
    document.getElementById("mouseover").style.fontSize="20pt";
}

// mouseout event (about.html)
function mouseout(){
    document.getElementById("mouseover").style.fontSize="15pt";
}

//onmouseup event (about.html) for table
function mouseup(){
    document.getElementById("updown").style.height="45vh";
}

//onmousedown event
function mousedown()
{
    document.getElementById("updown").style.height="70vh";
}

//FORM EVENTS

//onfocus (contact.html) for all
function onfocus1(x) {
    x.style.background = " #ccffcc";
}

//onblur event 
function blurevent(x){
    x.value = x.value.toUpperCase();
    x.style.background="";
}

//onchange event
function changevent(){
    var x=document.getElementById("branch").value;
    document.getElementById("demo").innerHTML="You've selected " + x;
}

//onsubmit event 
function submitevent(){
    alert("Form Submitted Succesfully .");
}

//onreset event
function resetevent()
{
    alert("Reset Successful");
}

//onselect event 
function selectevent(){
    alert("Selected some text");
}

//validation

function validateForm() {
	// Name Validation
	var regName = /\d+$/g;
	var name = document.getElementById('Name').value;
	if (name == '' || regName.test(name)) {
		window.alert('Please enter your name properly.');
		name.focus();
		return false;
	}

var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
	var email = document.getElementById('email').value;
	if (email == '' || !regEmail.test(email)) {
		window.alert('Please enter a valid e-mail address.');
		email.focus();
		return false;
	}

	// Phone Validation
	var regPhone = /^\d{10}$/;
	var phone = document.getElementById('mobile').value;
	if (phone == '' || !regPhone.test(phone)) {
		window.alert('Please enter valid phone number.');
		phone.focus();
		return false;
	}

	
}