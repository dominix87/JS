
//getName();
//double();
//double2(7987233);
//double2("dfs");
//range(2, 14);//????????????????????????
//tripple(41);
//oddEven(9);
//rangeOdd(3, 55);
enter9();



function enter9(){
	var n = prompt("ввдеите число 9");
	if (n == 9) return alert("Ну наконе-то ты ввел эту 9-ку");
	else {
		alert("а вот и нет!");
		enter9();
	}
}

function rangeOdd(x, y){ // работает нормально, если закомментить  в предидущей функции console.log
	for(var i = x; i <= y; i++){
		if (oddEven(i)) console.log(i);
	}

}

function oddEven(x){
	if (x % 2 == 0) {
		console.log(true); //Для наглядности
		return true
	}	
	else {
		console.log(false); //Для наглядности
		return false
	} 
}

function tripple(x){
	console.log( 3 * double2(x) );
}

function range(x, y){ //   ??????????????????????????????
	for (var i = x, sum; i <= y; i++){
		sum += i
		console.log(sum);
	}
	console.log(sum);
}


function double2(x){
	if( (typeof(x) == 'number') ){
	 mult = x * 2;
	 console.log(mult);
	 return mult;
	}
	else console.log("вы ввели не числовое знаечение");
}

function double(){
	var mult = 2 * (+prompt("Введите число"));
	alert( mult );
}

function getName(){
	var name = prompt("Как вас зовут?");
	alert("Привет " + name);
}