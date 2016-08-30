$(document).ready(function(){
	var selected_text;
	console.log("Hello");
	document.ondblclick = function(event) {
		if(window.getSelection) {
			selected_text = window.getSelection().toString()
			console.log("selected_text")
		}
	}
});