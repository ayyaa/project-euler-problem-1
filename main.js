var temp =0;

function multiples(){
	for (var i = 1; i < 1000; i++) {
		if (i%3===0 || i%5===0){
			temp = temp + i;
		}
		
	}
	console.log(temp);
	return temp;
}
