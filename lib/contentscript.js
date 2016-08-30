$(document).ready(function(){
	var selected_text;
	console.log("Hello");
	document.ondblclick = function(event) {
		if(window.getSelection) {
			selected_text = window.getSelection().toString()
			console.log(selected_text)
			dictionary_call(selected_text)
		}
	}
	
	function dictionary_call(selected_text)	{
		$.ajax({
			type : "GET",
			url : "https://api.pearson.com/v2/dictionaries/entries?headword="+selected_text,
			async : false,
			success: function(data) {
				console.log(data)
			},
			error: function(status, data) {
				if(statusText == error) {
					console.log("We are facing some issues!")
				}
			}
		});
	}

});