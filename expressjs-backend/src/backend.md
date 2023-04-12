
### 1. Creating a Hello World


`.get` vs `.listen`
```js

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, ()=> {
	console.log('Example app listening  at http://localhost:${pprt}');
});

```
	- We set up an endpoint with `app.get` function. 
	
	- What are two arguments that `app.get` takes?
		1. '/' : URL pattern
		2. anonymous function:
			- `req` : request
			- `res` : response
	- `app.listen` : listen to incoming http request on specifiedport number.



