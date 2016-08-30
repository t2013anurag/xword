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
			url : "https://api.pearson.com/v2/dictionaries/entries?headword="+selected_text +"&limit=5",
			async : false,
			success: function(data) {
				meaning = [];
				k = 0;
				arr = []
				arr = data.results
				for( i = 0; i < arr.length; i++){
					if(arr[i].senses[0]) {
						if(arr[i].senses[0].definition) {
							meaning[k++] = arr[i].senses[0].definition
						}
					}
				}
				var merged = [].concat.apply([], meaning)
				for( i = 0; i < merged.length; i++) {
					console.log(merged[i])
				}
			},
			error: function(status, data) {
				if(statusText == error) {
					console.log("We are facing some issues!")
				}
			}
		});
	}
});
