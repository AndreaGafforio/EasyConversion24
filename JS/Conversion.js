function fillin(){

var cat1 = document.getElementById("category1");
var cat2 = document.getElementById("category2");
var cat3 = document.getElementById("category3");
		
		cat2.innerHTML="";
		cat3.innerHTML="";
		
if (cat1.value == "speed"){	
	
	var fillArray = ["Choose | choose","kilometer | Kilometer","miles | Miles","knots | Knots", "metersecond | Meter/Second"];
	
}else if (cat1.value == "temperature"){	
	
	var fillArray = ["Choose | choose","celsius | Celsius","kelvin | Kelvin","fahrenheit | Fahrenheit"];
	
}else if (cat1.value == "length"){	
	
var fillArray = ["Choose | choose","meter | Meter","centimeter | Centimeters","kilometer | Kilometer", "millimeter | Millimeter", "foot |Foot","inches | Inches", "mile | Mile" ];

}else if (cat1.value == "volume"){	
	
	var fillArray = ["Choose | choose","liter | Liter","milliliter | Milliliter","usgal | US Gallon", "imperialgal | Imperial Gallon"];
	
}else if (cat1.value == "weight"){	
	
	var fillArray = ["Choose | choose","kilogram | Kilogram","gram | Gram", "milligram | Milligram", "tonne | Tonne", "pound | Pound"];
}
	//for category2
	for(var values in fillArray){
		
		var gg = fillArray[values].split("|");
		
		var newfill = document.createElement("option"); 		
		newfill.value = gg[0];
		newfill.innerHTML = gg[1];
		
		cat2.options.add(newfill);
				
	}
	
	//category3
	for(var zz in fillArray){
		
		var gg = fillArray[zz].split("|");
		
		var newfill = document.createElement("option"); 		
		newfill.value = gg[0];
		newfill.innerHTML = gg[1];
		
		cat3.options.add(newfill);
				
	}
	

}// end of function


