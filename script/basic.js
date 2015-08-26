var rules = document.getElementById("rules");

function listener(evt) {
	if(evt.keyCode === 27) {
		closerules();
	}
	if(evt.keyCode === 13) {
		startNew();
	}
}

function showrules() {
	rules.classList.add("visible");
	document.getElementById("howtoplay").classList.add("hide");
	window.addEventListener('keydown', listener, false);
}
function closerules() {
	rules.classList.remove("visible");
	document.getElementById("howtoplay").classList.remove("hide");
	window.removeEventListener('keydown', listener, false);
}

function hideDone() {
	document.getElementById("done").classList.remove("visible");
	window.removeEventListener('keydown', listener, false);
}

if(location.hash == "#rules") {
	showrules();
}