//color();
//getProduct(5);
array = [45, 88, 54, 88, 32, 32, 11, 565, 879, 854, 89, 998, 787, 777, 88, 98, 115, 112, 321, 554 ,885];
araryL = ["А", "ц", "К", "ы", "В", "п", "х", "с", "м", "п", "й", "ч", "Ч", "Ы", "У", "и", "И", "Я", "а", "Й", "В", "Р", "Ы", "Ф"];
//tableHTML ("orange", "pink", array);
//tableHTML(RGBtoHEX(color()), RGBtoHEX(color()), array )
//tableHTML2(araryL);
//getPrimesSumBelow(50);
sumOfDigits(4, 5);


function sumOfDigits(x, y){
	for (var i = 1, z = 0; i < y; i++){
		 z = x * x;
		console.log(x);
	}
	}

function getPrimesSumBelow(x){
	for(var i = 2; i < x; i++){
		for(var j = 2; j < i; j++){
			if (i % j == 0) break;
		}
	if (j == i) {
		console.log(i);
		//var z += i;
	}
	}
	//alert(z);
}
function tableHTML2(val){
	document.write("<table>");
	for(var i = 0; i < val.length; i++){
		var bgcolor = RGBtoHEX(color());
		if(i % 8 == 0) {
			document.write("<tr>");
			}
			document.write("<td bgcolor='" + bgcolor + "'>" + val[i] + "</td>");
	}	
	document.write("</table>");
}

function tableHTML(fcolor, scolor, val){
	document.write("<table>");
	for(var i = 0; i < val.length; i++){
		if(i % 8 == 0) {
			document.write("<tr>");
			}
			i % 2 == 0 ? document.write("<td bgcolor='" + fcolor + "'>" + val[i] + "</td>") : document.write("<td bgcolor='" + scolor + "'>" + val[i] + "</td>");
	}	
	document.write("</table>");
}

function getProduct(x){
	for(var i = 0, array = []; i <= x; i++){
		array[i] = " Product" + i;
	}	
	document.write(array);
}

function color(){
	var min = 1;
	var max = 255;
	var r = Math.floor(Math.random() * (max - min + 1)) + min;
	var g = Math.floor(Math.random() * (max - min + 1)) + min;
	var b = Math.floor(Math.random() * (max - min + 1)) + min;
	return rgb = [r, g, b];
	//alert( "RGB (" + r + " , " + g + " , " + b + ")" );
}

function RGBtoHEX(arr){
	r = arr[0];
	g = arr[1];
	b = arr[2];
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
	return("#" + r + g + b);	
}