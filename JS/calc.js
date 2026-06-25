
var btn = document.querySelector("#button");

//TEMPERATURE
function convertTemp(){	

var cat2 = document.querySelector("#category2"); 
var cat3 = document.querySelector("#category3"); 
var text1 = document.querySelector("#txt1");    	
var formula;
var num1;
var round;
var explain = document.querySelector(".explain");

if (cat2.value == "celsius " && cat3.value == "fahrenheit "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = (9/5 * num1) + 32; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;
 
 explain.innerHTML = "The formula for the conversion from C' to F' is: <br> (9/5 * Celsius) + 32"; 
    
 } else if (cat2.value == "fahrenheit " && cat3.value == "celsius "){			
            
    num1 = parseFloat(text1.value);
	
	formula = 5/9 * (num1 - 32);

    round = formula.toFixed(2); //round to 2 decimal	

    document.querySelector("#txt2").value = round;

   explain.innerHTML = "The formula for the conversion from F' to C' is: <br> 5/9 * (Fahrenheit - 32)";	
      
	  
 } else if (cat2.value == "fahrenheit " && cat3.value == "kelvin "){	 
          
    num1 = parseFloat(text1.value);
	
	formula = 9/5 * (num1 - 273) +32;
	
	round = formula.toFixed(2); //round to 2 decimal

    document.querySelector("#txt2").value = round;	
	 
	 explain.innerHTML = "The formula for the conversion from F' to K' is: <br> 9/5 * (Fahrenheit - 273) +32;";	
      
         
} else if (cat2.value == "kelvin " && cat3.value == "fahrenheit "){	 
          
   num1 = parseFloat(text1.value);
   
   formula = 5/9 *(num1 - 32) +273; 
   
   round = formula.toFixed(2); //round to 2 decimal

   document.querySelector("#txt2").value = round;

    explain.innerHTML = "The formula for the conversion from K' to F' is: <br>  5/9 *(Kelvin - 32) +273";	   
   
        
} else if (cat2.value == "kelvin " && cat3.value == "celsius "){	
          
   num1 = parseFloat(text1.value);
   
   formula = num1 - 273;
   
   round = formula.toFixed(2); //round to 2 decimal point
    
   document.querySelector("#txt2").value = round;
   
    explain.innerHTML = "The formula for the conversion from K' to C' is: <br>  Kelvin - 273";
   
}else if (cat2.value == "celsius " && cat3.value == "kelvin "){
	
   num1 = parseFloat(text1.value);   

   formula = num1 + 273;

   round = formula.toFixed(2); //round to 2 decimal   
     
   document.querySelector("#txt2").value = round;
   
    explain.innerHTML = "The formula for the conversion from K' to C' is: <br>  Celsius + 273";

}


return 0;		
}// END FUNCTION convertTemp()
 
btn.addEventListener('click', convertTemp); //trigger the button for temperature


//SPEED
function ConvertSpeed(){	
	
var cat2 = document.querySelector("#category2"); 
var cat3 = document.querySelector("#category3"); 
var text1 = document.querySelector("#txt1");    	
var formula;
var num1;
var round;
var explain = document.querySelector(".explain");

if (cat2.value == "kilometer " && cat3.value == "miles "){	 
 
 num1 = parseFloat(text1.value);
 
 formula = num1 * 0.62137; 

 round = formula.toFixed(2); //round to 2 decimal    
           
 document.querySelector("#txt2").value = round;
 
 explain.innerHTML = "The formula for the conversion from Km to Mph is: <br>  KM * 0.62137";
 
	
}else if(cat2.value == "miles " && cat3.value == "kilometer "){
	
 num1 = parseFloat(text1.value);
 
 formula = num1 * 1.60934;  
         
 round = formula.toFixed(2); //round to 2 decimal   
		 
 document.querySelector("#txt2").value = round;
 
 explain.innerHTML = "The formula for the conversion from Mph to Km is: <br>  Mph * 1.60934";
 
 
	
}else if(cat2.value == "knots " && cat3.value == "kilometer "){
	
 num1 = parseFloat(text1.value);
 
 formula = num1 * 1.85200;  
           
 round = formula.toFixed(2); //round to 2 decimal   		   
		   
 document.querySelector("#txt2").value = round;
	
 explain.innerHTML = "The formula for the conversion from Kts to Km' is: <br>  Kts * 1.85200 ";
 
	
	
}else if(cat2.value == "kilometer " && cat3.value == "knots "){
	
 num1 = parseFloat(text1.value);
 
 formula = num1 * 0.539957;  
           
 round = formula.toFixed(2); //round to 2 decimal   
		   
 document.querySelector("#txt2").value = round;
 
 explain.innerHTML = "The formula for the conversion from Km to Kts is: <br>  Km * 0.539957";
	
	
}else if(cat2.value == "miles " && cat3.value == "knots "){
	
 num1 = parseFloat(text1.value);
 
 formula = num1 * 0.868976;

 round = formula.toFixed(2); //round to 2 decimal    
           
 document.querySelector("#txt2").value = round;

explain.innerHTML = "The formula for the conversion from Mph to Kts is: <br>  Mph * 0.868976"; 
	
	
}else if(cat2.value == "knots " && cat3.value == "miles "){
	
num1 = parseFloat(text1.value);
 
 formula = num1 * 1.15078;  
           
 round = formula.toFixed(2); //round to 2 decimal   
		   
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML = "The formula for the conversion from Kts to Mph is: <br> Kts * 1.15078";
	
	
}else if(cat2.value == "kilometer " && cat3.value == "metersecond "){
	
 num1 = parseFloat(text1.value);
 
 formula = num1 * 0.277778;  
    
 round = formula.toFixed(2); //round to 2 decimal   
	
 document.querySelector("#txt2").value = round;
	
explain.innerHTML = "The formula for the conversion from Km to M/s is: <br> Km * 0.277778";
	
}else if(cat2.value == "metersecond " && cat3.value == "kilometer "){
	
 num1 = parseFloat(text1.value);
 
 formula = num1 * 3.6;  
          
 round = formula.toFixed(2); //round to 2 decimal   
		  
 document.querySelector("#txt2").value = round;
 
explain.innerHTML = "The formula for the conversion from M/s to Km is: <br> M/s * 3.6";
 
	
}else if(cat2.value == "miles " && cat3.value == "metersecond "){
	
 num1 = parseFloat(text1.value);
 
 formula = num1 * 0.44704;  
           
 round = formula.toFixed(2); //round to 2 decimal   		   
		   
 document.querySelector("#txt2").value = round;

explain.innerHTML = "The formula for the conversion from Mph to M/s is: <br> Mph * 0.44704"; 
	
}else if (cat2.value == "metersecond " && cat3.value == "miles "){

num1 = parseFloat(text1.value);
 
 formula = num1 * 2.23694;  
           
 round = formula.toFixed(2); //round to 2 decimal   
		   
 document.querySelector("#txt2").value = round;
 
 explain.innerHTML = "The formula for the conversion from M/s to Mph is: <br> M/s * 2.23694"; 
 
 
}else if (cat2.value == "knots " && cat3.value == "metersecond "){

num1 = parseFloat(text1.value);
 
 formula = num1 * 0.514444;

 round = formula.toFixed(2); //round to 2 decimal    
           
 document.querySelector("#txt2").value = round;
 
explain.innerHTML = "The formula for the conversion from Kts to M/s is: <br> Kts * 0.514444"; 
 
}else if (cat2.value == "metersecond " && cat3.value == "knots "){

num1 = parseFloat(text1.value);
 
 formula = num1 * 1.94384;  
        
 round = formula.toFixed(2); //round to 2 decimal   
		
 document.querySelector("#txt2").value = round;
 
 explain.innerHTML = "The formula for the conversion from M/s to Kts is: <br> M/s * 1.94384"; 
 
} 	



return 0;
}//END FUNCTION SPEED

btn.addEventListener('click', ConvertSpeed); //trigger the button for speed


//LENGHT FUNCTION
function ConvertLenght(){
	
var cat2 = document.querySelector("#category2"); 
var cat3 = document.querySelector("#category3"); 
var text1 = document.querySelector("#txt1");    	
var formula;
var num1;
var round;
var explain = document.querySelector(".explain");

//METER COMBINATIONS
if (cat2.value == "meter " && cat3.value == "centimeter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 100; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML = "To convert from M to Cm you should moltiply by 100"; 
 
	
} else if (cat2.value == "centimeter " && cat3.value == "meter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 100; 
  
  round = formula.toFixed(3); //round to 3 decimal
           
document.querySelector("#txt2").value = round;	

explain.innerHTML = "To convert from Cm to M you should divide by 100";


} else if (cat2.value == "meter " && cat3.value == "kilometer "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 1000; 
  
  round = formula.toFixed(4); //round to 4 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML = "To convert from M to Km you should divide by 1000"; 


}else if (cat2.value == "kilometer " && cat3.value == "meter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1000; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML = "To convert from Km to M you should moltiply by 1000"; 
	
} else if (cat2.value == "meter " && cat3.value == "millimeter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1000; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML = "To convert from M to Mm you should moltiply by 1000"; 

}else if (cat2.value == "millimeter " && cat3.value == "meter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 1000; 
  
  round = formula.toFixed(4); //round to 4 decimal
  
 explain.innerHTML = "To convert from Mm to M you should divide by 1000";
           
 document.querySelector("#txt2").value = round;	

}else if (cat2.value == "meter " && cat3.value == "foot "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 3.37; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML = "To convert from M to Ft you should moltiply M * 3.37";


}else if (cat2.value == "foot " && cat3.value == "meter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 0.3048; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML = "To convert from Ft to M you use this formula:<br> Ft * 0.3048";
 

}else if (cat2.value == "meter " && cat3.value == "inches "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 39.37; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML = "To convert from M to Inches you can use the following formula:<br> M * 39.37";
 

}else if (cat2.value == "inches " && cat3.value == "meter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 0.0254; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

 explain.innerHTML = "To convert from Inches to M you can use the following formula:<br> Inches * 0.0254"; 

}else if (cat2.value == "meter " && cat3.value == "mile "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 0.0000621; 
  
  round = formula.toFixed(3); //round to 3 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML = "To convert from M to Miles you can use the following formula:<br> M * 0.0000621"; 
 
 
}else if (cat2.value == "mile " && cat3.value == "meter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1609.34; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML = "To convert from Mile to M you can use the following formula:<br> Mile * 1609.34"; 
 
}
//CM COMBINATIONS
else if (cat2.value == "centimeter " && cat3.value == "kilometer "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 100000; 
  
  round = formula.toFixed(5); //round to 5 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Cm to Km you should divide by 100000";

}else if (cat2.value == "kilometer " && cat3.value == "centimeter "){	 
 
 num1 = parseFloat(text1.value);
 
 formula = num1 * 100000; 
  
 round = formula.toFixed(3); //round to 3 decimal
           
 document.querySelector("#txt2").value = round;	

explain.innerHTML= "To convert from Km to Cm you should moltiply by 100000"; 

}else if (cat2.value == "centimeter " && cat3.value == "millimeter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 10; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

 explain.innerHTML= "To convert from Cm to Mm you should moltiply by 10";  
	
}else if (cat2.value == "millimeter " && cat3.value == "centimeter "){	 
 
 num1 = parseFloat(text1.value);
 
 formula = num1 / 10; 
  
 round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Mm to Cm you should divide by 10";
	
}else if (cat2.value == "centimeter " && cat3.value == "foot "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 0.033; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Cm to Ft you should use the following formula:<br> Cm * 0.033"; 
	
} else if (cat2.value == "foot " && cat3.value == "centimeter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 30.48; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Ft to Cm you should use the following formula:<br> Ft * 30.48";  
	
}else if (cat2.value == "centimeter " && cat3.value == "inches "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 2.54; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Cm to Inches you should use the following formula:<br> Cm / 2.54";   
	
}else if (cat2.value == "inches " && cat3.value == "centimeter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 2.54; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Inches to Cm you should use the following formula:<br> Inches * 2.54";
	
}else if (cat2.value == "centimeter " && cat3.value == "mile "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 /160934.4; 
  
  round = formula.toFixed(3); //round to 3 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Cm to Miles you should use the following formula:<br> Cm / 160934.4";
 
	
}else if (cat2.value == "mile " && cat3.value == "centimeter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 160934.4; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Miles to Cm you should use the following formula:<br> Miles * 160934.4";
	
} 
//KILOMETER COMBINATIONS
else if (cat2.value == "kilometer " && cat3.value == "millimeter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1000000; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Km to Mm you should moltiply by 1000000";
 
	
}else if (cat2.value == "millimeter " && cat3.value == "kilometer "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 1000000; 
  
  round = formula.toFixed(7); //round to 7 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Mm to Km you should divide by 1000000";
	
}else if (cat2.value == "kilometer " && cat3.value == "foot "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 3280.84; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML = "The formula for the conversion from Km to Ft is: <br> Km * 3280.84";  
	
}else if (cat2.value == "foot " && cat3.value == "kilometer "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 3280.84; 
  
  round = formula.toFixed(3); //round to 3 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML = "The formula for the conversion from Ft to Km is: <br> Ft / 3280.84";  
	
}else if (cat2.value == "kilometer " && cat3.value == "inches "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 3970.08; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML = "The formula for the conversion from Km to Inches is: <br> Km * 3970.08";
 
}else if (cat2.value == "inches " && cat3.value == "kilometer "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 /3970.08; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML = "The formula for the conversion from Inches to Km is: <br> Inches / 3970.08";   
	
}else if (cat2.value == "kilometer " && cat3.value == "mile "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 1.6093; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML = "The formula for the conversion from Km to Mile is: <br> Km / 1.6093";
	
}else if (cat2.value == "mile " && cat3.value == "kilometer "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1.6093; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML = "The formula for the conversion from Mile to Km is: <br> mile * 1.6093";
	
}
//MM COMBINATIONS
else if (cat2.value == "millimeter " && cat3.value == "foot "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 305; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML = "The formula for the conversion from Mm to Ft is: <br> Mm / 305"; 
	
}else if (cat2.value == "foot " && cat3.value == "millimeter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 305; 
  
  round = formula.toFixed(3); //round to 3 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML = "The formula for the conversion from Ft to Mm is: <br> Ft * 305";  
	
}else if (cat2.value == "millimeter " && cat3.value == "inches "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 25.4; 
  
  round = formula.toFixed(3); //round to 3 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Mm to Inches you should use the following formula:<br> Mm / 25.4";
	
}else if (cat2.value == "inches " && cat3.value == "millimeter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 25.4; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;
 
explain.innerHTML= "To convert from Inches to Mm you should use the following formula:<br> Inches * 25.4";
	
}else if (cat2.value == "millimeter " && cat3.value == "mile "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 1609; 
  
  round = formula.toFixed(3); //round to 3 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML="To convert from Mm to Mile you ca use the formula:<br> Mm / 1609"; 
	
}else if (cat2.value == "mile " && cat3.value == "millimeter "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1609; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML="To convert from Mile to Mme you ca use the formula:<br> Mile * 1609";  
	
}
//FOOT COMBINATIONS
else if (cat2.value == "foot " && cat3.value == "inches "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 12; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Ft to Inches you can use the following formula:<br> Ft *12"; 
	
}else if (cat2.value == "inches " && cat3.value == "foot "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 12; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Inches to Ft you can use the following formula:<br> Inches / 12"; 
	
}else if (cat2.value == "foot " && cat3.value == "mile "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 5280; 
  
  round = formula.toFixed(4); //round to 4 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Ft to Mile you can use the following formula:<br> Ft /5280";
	
}else if (cat2.value == "mile " && cat3.value == "foot "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 5280; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Mile to ft you can use the following formula:<br> Mile * 5280";
	
}
//INCH ONLY COMBINATIONS
else if (cat2.value == "inches " && cat3.value == "foot "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 63360; 
  
  round = formula.toFixed(5); //round to 5 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Inches to ft you can use the following formula:<br> Inches / 63360"; 
	
}else if (cat2.value == "foot " && cat3.value == "inches "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 63360; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Ft to Inches you can use the following formula:<br> Ft * 63360";  
	
}//END IF ELSE	
	


return 0;	
}//END LENGHT

btn.addEventListener('click', ConvertLenght); //trigger the button for lenght


function ConvertWeight(){
	
var cat2 = document.querySelector("#category2"); 
var cat3 = document.querySelector("#category3"); 
var text1 = document.querySelector("#txt1");    	
var formula;
var num1;
var round;
var explain = document.querySelector(".explain");
	
if (cat2.value == "kilogram " && cat3.value == "gram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1000; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;
 
 explain.innerHTML= "To convert from Kg to G you should moltiply by 1000";
	
}else if (cat2.value == "gram " && cat3.value == "kilogram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 1000; 
  
  round = formula.toFixed(4); //round to 4 decimal
  
 explain.innerHTML= "To convert from G to Kg you should divide by 1000";
           
 document.querySelector("#txt2").value = round;	
	
}else if (cat2.value == "kilogram " && cat3.value == "milligram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1000000;
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Kg to Mg you should moltiply by 1000000";
 

}else if (cat2.value == "milligram " && cat3.value == "kilogram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 1000000; 
  
  round = formula.toFixed(6); //round to 6 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Mg to Kg you should divide by 1000000"; 
	
}else if (cat2.value == "kilogram " && cat3.value == "tonne "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 1000; 
  
  round = formula.toFixed(4); //round to 4 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Kg to T you should divide by 1000"; 
	
}else if (cat2.value == "tonne " && cat3.value == "kilogram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1000; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from T to Kg you should moltiply by 1000"; 
	
}else if (cat2.value == "kilogram " && cat3.value == "pound "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 2.205; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Kg to Lb you should use this formula:<br> Kg * 2.205"; 
	
}else if (cat2.value == "pound " && cat3.value == "kilogram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 2.205; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Lb to Kg you should use this formula:<br> Lb / 2.205"; 
	
}else if (cat2.value == "gram " && cat3.value == "tonne "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 1000000; 
  
  round = formula.toFixed(6); //round to 6 decimal
           
 document.querySelector("#txt2").value = round;	

 explain.innerHTML= "To convert from G to T you should divide by 1000000"; 
	
}else if (cat2.value == "tonne " && cat3.value == "gram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1000000; 
  
  round = formula.toFixed(6); //round to 6 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from G to T you should moltiply by 1000000";  
	
}else if (cat2.value == "gram " && cat3.value == "milligram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1000; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from G to Mg you should moltiply by 1000";  
	
}else if (cat2.value == "milligram " && cat3.value == "gram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 1000; 
  
  round = formula.toFixed(3); //round to 3 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Mg to G you should divide by 1000";   
	
}else if (cat2.value == "gram " && cat3.value == "pound "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 453.59; 
  
  round = formula.toFixed(4); //round to 4 decimal
           
 document.querySelector("#txt2").value = round;

 explain.innerHTML= "To convert from G to Lb you can use the followiing formula:<br> G / 453.59";   
	
}else if (cat2.value == "pound " && cat3.value == "gram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 453.59; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Lb to G you can use the followiing formula:<br> Lb * 453.59";    
	
}else if (cat2.value == "milligram " && cat3.value == "tonne "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 1000000000; 
  
  round = formula.toFixed(9); //round to 9 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Mg to T you should divide by 1000000000"; 
	
}else if (cat2.value == "tonne " && cat3.value == "milligram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 1000000000; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from T to Mg you should moltiply by 1000000000"; 
	
}else if (cat2.value == "milligram " && cat3.value == "pound "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 453592.3; 
  
  round = formula.toFixed(7); //round to 7 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Mg to Lb you ca use the formula:<br> Mg / 453592.3"; 
	
}else if (cat2.value == "pound " && cat3.value == "milligram "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 453592.3; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Lb to Mg you ca use the formula:<br> Lb * 453592.3"; 
	
}else if (cat2.value == "tonne " && cat3.value == "pound "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 * 2204.62; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from T to Lb you ca use the formula:<br> T * 2204.62";  
	
}else if (cat2.value == "pound " && cat3.value == "tonne "){	 
 
 num1 = parseFloat(text1.value);
 
  formula = num1 / 2204.62; 
  
  round = formula.toFixed(6); //round to 6 decimal
           
 document.querySelector("#txt2").value = round;	
	
explain.innerHTML= "To convert from Lb to T you ca use the formula:<br> Lb / 2204.62";  
}	
	

	
return 0;	
}//END OF FUNCTION WEIGHT

btn.addEventListener('click', ConvertWeight);


function ConvertVolume(){
	
var cat2 = document.querySelector("#category2"); 
var cat3 = document.querySelector("#category3"); 
var text1 = document.querySelector("#txt1");    	
var formula;
var num1;
var round;
var explain = document.querySelector(".explain");

if(cat2.value == "liter " && cat3.value == "milliliter "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 * 1000; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from L to Ml you should moltiply by 1000"; 
	
}else if(cat2.value == "milliliter " && cat3.value == "liter "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 / 1000; 
  
  round = formula.toFixed(3); //round to 3 decimal
           
 document.querySelector("#txt2").value = round;	
 
 explain.innerHTML= "To convert from Ml to L you should moltiply by 1000";
	
}else if(cat2.value == "liter " && cat3.value == "usgal "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 / 3.79; 
  
  round = formula.toFixed(3); //round to 3 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from L to Us Gal you can use the following formula:<br> L / 3.79"; 
	
}else if(cat2.value == "usgal " && cat3.value == "liter "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 * 3.79; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from Us Gal to L you can use the following formula:<br> US Gal * 3.79";  
	
}else if(cat2.value == "liter " && cat3.value == "imperialgal "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 / 4.55; 
  
  round = formula.toFixed(3); //round to 3 decimal
           
 document.querySelector("#txt2").value = round;	
 
explain.innerHTML= "To convert from L to ImpGal you can use the following formula:<br> L /4.55";   
	
}else if(cat2.value == "imperialgal " && cat3.value == "liter "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 * 4.55; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;

explain.innerHTML= "To convert from ImpGal to L you can use the following formula:<br> ImpGal * 4.55";   
	
}else if(cat2.value == "milliliter " && cat3.value == "usgal "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 / 3785; 
  
  round = formula.toFixed(4); //round to 4 decimal
           
 document.querySelector("#txt2").value = round;
 
 explain.innerHTML= "To convert from Ml to Us Gal you can use the following formula:<br> Ml / 3785";   

}else if(cat2.value == "usgal " && cat3.value == "milliliter "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 * 3785; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;
 
 explain.innerHTML= "To convert from Us Gal to Ml you can use the following formula:<br> Us Gal * 3785";
 
}else if(cat2.value == "milliliter " && cat3.value == "imperialgal "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 / 4546; 
  
  round = formula.toFixed(4); //round to 4 decimal
           
 document.querySelector("#txt2").value = round;
 
 explain.innerHTML= "To convert from Ml to Imp Gal you can use the following formula:<br> Ml / 4546";
 
}else if(cat2.value == "imperialgal " && cat3.value == "milliliter "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 * 4546; 
  
  round = formula.toFixed(2); //round to 2 decimal
           
 document.querySelector("#txt2").value = round;
 
  explain.innerHTML= "To convert from Imp Gal to Ml Gal you can use the following formula:<br> Imp Gal * 4546";
 
}else if(cat2.value == "usgal " && cat3.value == "imperialgal "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 / 1.201; 
  
  round = formula.toFixed(4); //round to 4 decimal
           
 document.querySelector("#txt2").value = round;
 
  explain.innerHTML= "To convert from Us Gal to Imp Gal you can use the following formula:<br> Us Gal /1.201";
 
}else if(cat2.value == "imperialgal " && cat3.value == "usgal "){
	
  num1 = parseFloat(text1.value);
 
  formula = num1 * 1.201; 
  
  round = formula.toFixed(4); //round to 4 decimal
           
 document.querySelector("#txt2").value = round;
 
 explain.innerHTML= "To convert from Imp Gal to Us Gal you can use the following formula:<br> Imp Gal * 1.201";
 
}  

//HANDLE ERROR
var advice = document.querySelector(".advice");

advice.innerHTML = "";

try {	
	if (cat2.value == cat3.value) throw "Please choose an other measurement <br>example: Liter - US Gallon";
	if (text1.value == "") throw "Empty input";
	if (isNaN(text1.value)) throw "Please enter a number ";
	if (cat3.value == "Choose ")throw "Please choose a measure";
	if (cat2.value == "Choose ")throw "Please choose a measure";

}catch(err){
	
 advice.innerHTML = "Error: " + err;
	
}
	
	
return 0;	
}

btn.addEventListener('click', ConvertVolume);



