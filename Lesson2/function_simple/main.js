
//getName();
//double();
//double2(7987233);
//double2("dfs");
//range(2, 14);//????????????????????????
tripple(41);



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