function closepopup(id) {
	document.getElementById(id).classList.add("hide");
}

function cancel() {
	document.getElementById("cancel-click").classList.remove("hide");
}

function passcheck() {
	if (document.getElementById("old-pass").value=="123456789") {
		document.getElementById("wrongpass").classList.remove("hide");
	}
	else {
		window.location.href = "index11.html";
	}
}
