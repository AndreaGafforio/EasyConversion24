
var Reset = document.querySelector(".reseting");

function Reseting(){
	
var text1 = document.querySelector("#txt1");
var text2 = document.querySelector("#txt2");
var cat2 = document.querySelector("#category2"); 
var cat3 = document.querySelector("#category3"); 
var explain = document.querySelector(".explain");
var error = document.querySelector(".advice");

cat2.value = "Choose ";	
cat3.value = "Choose ";
text1.value = "";
text2.value = "";
explain.innerHTML = "";	
error.innerHTML = "";
	
return 0;	
}

Reset.addEventListener('click', Reseting);