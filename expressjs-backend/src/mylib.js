
function get_userid(){
	console.log("did i get here? ")
	a = get3alpha();
	b = get3digits();
	
	return a+b;
}


function is_uniqid(i,j){
	for(val of i){
		if(val.id === j){
			return false;
		}
	}
	return true;
}

function gen3alpha(){
	min = 97;
	max = 122;
	str = "";
	for(let i = 0; i<3; i++){
		j = Math.floor(Math.random() * (max-min) + min);
		str+=(String.fromCharCode(j));
	}
	return str;
}

function gen3digits(){
	min = 48;
	max = 57;
	str = "";
	for(let i = 0; i<3; i++){
		j = Math.floor(Math.random() * (max-min) + min);
		str+=(String.fromCharCode(j));
	}
	return str;
}
