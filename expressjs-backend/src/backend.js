//Import Express Modules
//Express will work as an HTTP middleware //dispatching HTTP calls to the routes we
//define in the file and also sending back
//responses.

const express = require('express');
const app = express();

//Setting port number
const port = 8000;

//We set up our express app to process 
//incoming data in JSON format.
app.use(express.json());

Setup API endpoint with the app.get function
app.get('/', (req, res) => {
	res.send('Hello World!');
		});

app.listen(port, ()=> {
	console.log('Example app listening at http://localhost:${port}');
});


