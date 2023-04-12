const express = require('express');
const app = express();

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
app.use(express.json());

//Setup API endpoint with the app.get function
app.get('/' , (req, res) => {
	res.send('Hello World Sucker !');	
});

app.get('/users', (req, res) => {
	res.send(users);
		});

app.listen(port, ()=> {
	console.log('Example app listening at http://localhost:${port}');
});


