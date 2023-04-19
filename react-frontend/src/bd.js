
async function fetchAll(){
	try {
		const response = await axios.get('http://localhost:8000/users');
		return response.data.users_list;
	}
	catch (error){
		console.log(error);
		return false;
	}
}

useEffect(() => {
	fetchAll().then(result => {
		if(result)
			setCharacters(result);
	});
},  []);
