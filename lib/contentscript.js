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
				// retrieving the meaning
				for(i = 0; i < arr.length; i++){
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

				// retrieving the audio prounnciation url
				audio = []
				a = 0
				audio_url = ""
				for(i = 0; i< arr.length; i++){
					if(arr[i].pronunciations) {
						if(arr[i].pronunciations[0].audio) {
							audio[a++] = arr[i].pronunciations[0].audio[0].url
						}
					}
				}
				if(audio.length > 0){
					audio_url = "http://api.pearson.com" + audio[0]
				}
				console.log(audio_url)
			},
			error: function(status, data) {
				if(statusText == error) {
					console.log("We are facing some issues!")
				}
			}
		});
	}
});
