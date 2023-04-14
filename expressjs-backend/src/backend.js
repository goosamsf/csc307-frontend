const mylib  = require('./mylib.js');
const express = require('express');
const app = express();
const cors = require('cors');

//Setting port number
const port = 8000;

const users = { 
   users_list :
   [
      { 
         id : 'xyz789',
         name : 'Charlie',
         job: 'Janitor',
      },
      {
         id : 'abc123', 
         name: 'Mac',
         job: 'Bouncer',
      },
      {
         id : 'ppp222', 
         name: 'Mac',
         job: 'Professor',
      }, 
      {
         id: 'yat999', 
         name: 'Dee',
         job: 'Aspring actress',
      },
      {
         id: 'zap555', 
         name: 'Dennis',
         job: 'Bartender',
      }
   ]
}

//We set up our express app to process 
//incoming data in JSON format.
app.use(cors());
app.use(express.json());

//Setup API endpoint with the app.get function
app.get('/' , (req, res) => {
	res.send('Hello World Sucker !');	
});

app.get('/error' , (req,res) => {
	res.send("How did you get here? ");
		});

app.get('/users', (req, res) => {
	 const name = req.query.name;
	 if(name != undefined){
		 let result = findUserByName(name);
		 result = {users_list: result};
		 res.send(result);
	 }
	 else {
		res.send(users);
	 }
});

app.get('/users/:id', (req,res) => {

	const id = req.params['id'];
	let result = findUserById(id);
	if (result === undefined || result.length == 0)
		res.status(404).send('Resouce not found');
	else{
		result = {users_list: result};
		res.send(result);
	}

});

function findUserById(id) {
	return users['users_list'].find((user) => user['id'] === id);
}

const findUserByName = (name) => {
	return users['users_list'].filter((user) => user['name'] === name);
}

app.listen(port, ()=> {
	console.log('Example app listening at http://localhost:${port}');
});

app.post('/users', (req , res) => {
	const userToAdd = req.body;
	idgen = get_userid();
	while(!is_uniqid(users.users_list, idgen)){
		idgen = get_userid();
	}
	userToAdd.id = idgen;
	addUser(userToAdd);
	res.status(201).end();
});
 function addUser(user) {
	 users['users_list'].push(user);
 }



function get_userid(){
	a = gen3alpha();
	b = gen3digits();
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
