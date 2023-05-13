function addImage() {
	var file = new FileReader();
	file.onload = function () {
		document.getElementById("img-preview").src = file.result;
	}
	file.readAsDataURL(document.getElementById("img-input").files[0]);
}

function closepopup(id) {
	document.getElementById(id).classList.add("hide");
}

function cancel() {
	document.getElementById("cancel-click").classList.remove("hide");
}