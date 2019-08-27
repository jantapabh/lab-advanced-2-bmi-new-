function calbmi(){
    var h = +(document.getElementById("h").value);
    var w = +(document.getElementById("w").value);
    var h = h/100.0;
    var out = (w/(h*h)).toFixed(2);
    document.getElementById("output").innerHTML = "<h1> Result :  "+out+" </h1>";
	if(out < 18.5)
		document.getElementById("show").innerHTML = "<h1> Level : Underweight </h1>";
	if(out >= 18.5 && out <24.9)
		document.getElementById("show").innerHTML = "<h1> Level : Normal </h1>";
	if(out >= 25 && out <= 29.9) 
		document.getElementById("show").innerHTML = "<h1> Level : Overweight </h1>";
	if(out >= 30.0 && out <= 34.9)
		document.getElementById("show").innerHTML = "<h1>Level : Obest </h1>";
	if(out >= 35)
		document.getElementById("show").innerHTML = "<h1>Level : Extremly obese </h1>";


}

