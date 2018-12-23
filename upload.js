window.onload = function(){
	
	var form = document.getElementById("form");
	var input = document.getElementById("fileButton");
	var output = document.getElementById("output");

	form.onsubmit = function uploadContent(){
		var xmlFile = input.value;
		var text;
		var reader = new FileReader();
		var onload = function(event){
			text = reader.result;
			console.log(text);
			localStorage.setItem("xmlText", text);
		}

		reader.onload = onload;
		reader.readAsText(input.files[0]);
	}
}