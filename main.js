window.onload = function () {

	var agitatedToCalmSlider = document.getElementById("agitatedToCalmSlider");
	var happyToSadSlider = document.getElementById("happyToSadSlider");
	var tiredToAwakeSlider = document.getElementById("tiredToAwakeSlider");
	var scaredToFearlessSlider = document.getElementById("scaredToFearlessSlider");

	var agitatedToCalm;
	var happyToSad;
	var tiredToAwake;
	var scaredToFearless;

	var image1 = document.getElementById("image1");
	var image2 = document.getElementById("image2");
	var image3 = document.getElementById("image3");
	var image4 = document.getElementById("image4");
	var image5 = document.getElementById("image5");

	var title1 = document.getElementById("title1");
	var title2 = document.getElementById("title2");
	var title3 = document.getElementById("title3");
	var title4 = document.getElementById("title4");
	var title5 = document.getElementById("title5");

	var bestProgrammeValues = new Array(0, 0, 0, 0, 0);
	var bestProgrammeIndexes = new Array(0, 0, 0, 0, 0);

	var agitatedToCalmValues;
	var happyToSadValues;
	var tiredToAwakeValues;
	var scaredToFearlessValues;

	agitatedToCalmSlider.oninput = function() {
		agitatedToCalm = agitatedToCalmSlider.value;
		console.log(agitatedToCalm);
		sortProgrammes();
	}

	happyToSadSlider.oninput = function() {
		happyToSad = happyToSadSlider.value;
		console.log(happyToSad);
		sortProgrammes();
	}

	tiredToAwakeSlider.oninput = function() {
		tiredToAwake = tiredToAwakeSlider.value;
		console.log(tiredToAwake);
		sortProgrammes();
	}

	scaredToFearlessSlider.oninput = function() {
		scaredToFearless = scaredToFearlessSlider.value;
		console.log(scaredToFearless);
		sortProgrammes();
	}

	function sortProgrammes(){
		bestProgrammeValues = new Array(0, 0, 0, 0, 0);
		bestProgrammeIndexes = new Array(0, 0, 0, 0, 0);

		for (var i = 0; i < programmes.length; i++){
			var programmeValue = 0;
			var aToC = agitatedToCalmValues[i].childNodes[0].nodeValue * agitatedToCalm;
			var hToS = happyToSadValues[i].childNodes[0].nodeValue * happyToSad;
			var tToA = tiredToAwakeValues[i].childNodes[0].nodeValue * tiredToAwake;
			var sToF = scaredToFearlessValues[i].childNodes[0].nodeValue * scaredToFearless;

			if (!isNaN(aToC)) programmeValue += aToC;
			if (!isNaN(hToS)) programmeValue += hToS;
			if (!isNaN(tToA)) programmeValue += tToA;
			if (!isNaN(sToF)) programmeValue += sToF;
			console.log("Value: " + programmeValue);

			if (programmeValue > bestProgrammeValues[0]){
				bestProgrammeValues.unshift(programmeValue);
				bestProgrammeIndexes.unshift(i);
			} else if (programmeValue > bestProgrammeValues[1]){
				bestProgrammeValues.splice(1, 0, programmeValue);
				bestProgrammeIndexes.splice(1, 0, i);
			} else if (programmeValue > bestProgrammeValues[2]){
				bestProgrammeValues.splice(2, 0, programmeValue);
				bestProgrammeIndexes.splice(2, 0, i);
			} else if (programmeValue > bestProgrammeValues[3]){
				bestProgrammeValues.splice(3, 0, programmeValue);
				bestProgrammeIndexes.splice(3, 0, i);
			} else if (programmeValue > bestProgrammeValues[4]){
				bestProgrammeValues.splice(4, 0, programmeValue);
				bestProgrammeIndexes.splice(4, 0, i);
			}
		}
		console.log("Programme1 (" + bestProgrammeValues[0] + "): " + xmlDoc.getElementsByTagName("title")[bestProgrammeIndexes[0]].childNodes[0].nodeValue);
		console.log("Programme2 (" + bestProgrammeValues[1] + "): " + xmlDoc.getElementsByTagName("title")[bestProgrammeIndexes[1]].childNodes[0].nodeValue);
		console.log("Programme3 (" + bestProgrammeValues[2] + "): " + xmlDoc.getElementsByTagName("title")[bestProgrammeIndexes[2]].childNodes[0].nodeValue);
		console.log("Programme4 (" + bestProgrammeValues[3] + "): " + xmlDoc.getElementsByTagName("title")[bestProgrammeIndexes[3]].childNodes[0].nodeValue);
		console.log("Programme5 (" + bestProgrammeValues[4] + "): " + xmlDoc.getElementsByTagName("title")[bestProgrammeIndexes[4]].childNodes[0].nodeValue);

		image1.src = xmlDoc.getElementsByTagName("imagePath")[bestProgrammeIndexes[0]].childNodes[0].nodeValue;
		image2.src = xmlDoc.getElementsByTagName("imagePath")[bestProgrammeIndexes[1]].childNodes[0].nodeValue;
		image3.src = xmlDoc.getElementsByTagName("imagePath")[bestProgrammeIndexes[2]].childNodes[0].nodeValue;
		image4.src = xmlDoc.getElementsByTagName("imagePath")[bestProgrammeIndexes[3]].childNodes[0].nodeValue;
		image5.src = xmlDoc.getElementsByTagName("imagePath")[bestProgrammeIndexes[4]].childNodes[0].nodeValue;

		title1.innerHTML = xmlDoc.getElementsByTagName("title")[bestProgrammeIndexes[0]].childNodes[0].nodeValue;
		title2.innerHTML = xmlDoc.getElementsByTagName("title")[bestProgrammeIndexes[1]].childNodes[0].nodeValue;
		title3.innerHTML = xmlDoc.getElementsByTagName("title")[bestProgrammeIndexes[2]].childNodes[0].nodeValue;
		title4.innerHTML = xmlDoc.getElementsByTagName("title")[bestProgrammeIndexes[3]].childNodes[0].nodeValue;
		title5.innerHTML = xmlDoc.getElementsByTagName("title")[bestProgrammeIndexes[4]].childNodes[0].nodeValue; 
	}

	var text = localStorage.getItem("xmlText")
	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(text, "text/xml");
	var programmes = xmlDoc.getElementsByTagName("programme");
	console.log(programmes.length);

	agitatedToCalmValues = xmlDoc.getElementsByTagName("agitatedToCalm");
	happyToSadValues = xmlDoc.getElementsByTagName("happyToSad");
	tiredToAwakeValues = xmlDoc.getElementsByTagName("tiredToAwake");
	scaredToFearlessValues = xmlDoc.getElementsByTagName("scaredToFearless");
}
