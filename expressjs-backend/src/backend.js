const mylib  = require('./mylib.js');
const express = require('express');
const app = express();
const cors = require('cors');
const userServices = require('./user-services');

const userModel = require('./user');
//Setting port number
const port = 8000;

//We set up our express app to process 
//incoming data in JSON format.
app.use(cors());
app.use(express.json());

const users = { 
   users_list :
   []
}


//Setup API endpoint with the app.get function
app.get('/' , (req, res) => {
	res.send('Hello World!');	
});

app.get('/users', async (req, res) => {
	const name = req.query['name'];
	const job = req.query['job'];
	try {
		const result = await userServices.getUsers(name, job);
		res.send({users_list: result});
	} catch (error){
		console.log(error);
		res.status(500).send('An error ocurred in the server');
	}
});


app.get('/users/:id', async (req,res) => {
	const id = req.params['_id'];
	const result = await userServices.findUserById(id);
	
	if (result === undefined || result === null)
		res.status(404).send('Resouce not found');
	else{
		res.send({users_list: result});
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

app.post('/users', async (req, res) => {
  const user = req.body;
  const savedUser = await userServices.addUser(user);
  if (savedUser) res.status(201).send(savedUser);
  else res.status(500).end();
});

app.delete('/users/:id' , (req, res) => {
	console.log(req.params.id);
	const userToDelete  = req.params.id; 
	ind = getind_del(userToDelete)
	if (ind != -1){
		deleted = users["users_list"].splice(ind, 1);
		console.log("Sucessfully deleted");
		res.status(204).send();
	}
});



function getind_del(target){
	obj = users['users_list'];
	for(i =0; i< obj.length; i++){
		if(obj[i].id == target){
			console.log("found,%s", i);
			return i;
		}
		
	}	
	return -1;
}


async function addUser(user) {
  try {
    const userToAdd = new userModel(user);
    const savedUser = await userToAdd.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    return false;
  }
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
	
