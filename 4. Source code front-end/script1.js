function submitform() {
	var pw = document.getElementById("password").value;
	if (pw == "123456789") {
		window.location.href = ("index2.html");
	} else {
		document.getElementById("wronglogin").classList.remove("hide");
	}
}

function closepopup() {
	document.getElementById("wronglogin").classList.add("hide");
}