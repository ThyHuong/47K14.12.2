function closepopup(id) {
	document.getElementById(id).classList.add("hide");
}

function cancel() {
	document.getElementById("cancel-click").classList.remove("hide");
}

function custcheck() {
	if (document.getElementById("cust-num").value=="0123456789") {
		document.getElementById("miss-cust").classList.remove("hide");
	}
}

function paymentcheck() {
	var val = document.getElementById("status").value;
	if (val=="finished") {
		document.getElementById("pay-confirm").classList.remove("hide");
	} else {
		window.location.href = 'index2.html';
	}
}
