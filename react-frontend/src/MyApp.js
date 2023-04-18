import React, {useState, useEffect} from 'react'
import Table from './Table'
import Form from './Form';
import axios from 'axios';

function MyApp() {
    const [characters, setCharacters] = useState([
    ]);

function removeOneCharacter (index) {
	const person = characters[index].id;
	makeDeleteCall(person).then((result) => {
		if (result.status ===204){
			const updated = characters.filter((character,i)=> {
				return i !== index;
			});
		setCharacters(updated)
		}
	});
}

function updateList(person){
    setCharacters([...characters, person]);
}

async function fetchAll(){
	try {
		const response = await axios.get(`http://localhost:8000/users`);
 		console.log(response);
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

async function makeDeleteCall(person){
	try{
		console.log(person);
		const response = await axios.delete(`http://localhost:8000/users/${person}`,person);
		console.log(response);
		return response;
	}
	catch (error){
		console.log(error);
		return false;
	}
}


async function makePostCall(person){
   try {
      const response = await axios.post('http://localhost:8000/users', person);
	  console.log(response);
      return response;
   }
   catch (error) {
      console.log(error);
      return false;
   }
}

function updateList(person) {
   makePostCall(person).then( result => {
   if (result && result.status === 201)
      setCharacters([...characters, person] );
   });
}



//function updateList(person){
//	makeDeleteCall(person).then( result => {
//		if(result && result.status ===200)
//			setCharacters([...characters,person]);
//			} );
//}

  return (
    <div className="container">
        <Table characterData={characters} removeCharacter={removeOneCharacter } />
     <Form handleSubmit={updateList} />
    </div>
  )
}

export default MyApp;
