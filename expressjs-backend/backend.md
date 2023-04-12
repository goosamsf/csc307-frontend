
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


### 2. What can you do with 'package.json'
	- Inside of `package.json` file, there is `script` section where it manages the script setting. For example, if you add "dev" command in `script` and specify what it does in value("key" : "value"). We can easily type command to start the program.  
	- eg) `"dev" : "nodemon backend.js"`
		- Now we can do `npm run dev`, instead of `npx  nodemon backend.js`.


### 3. Query, rather than fetching all users, give conditions
	- Structure if-else statement in the section where you want to apply the logic(filter).
	- Set a local variable that will contain the `query name`
	- Check if `queryname is defined`
		- Set local variable that will hold the result of query.
		- get a result by calling a function "findUserByName"
		- `result = {user_list : result}` << hmm?
		- `res.send(result)` : send result(answer the query)
	- Otherwise;when query name is not defined,
		just send every user.

	- Define "findUserByName":
		-takes `name` 
		-filter, how to filter list?
```js
const findUserByName = (name) => {
	return users['users_list'].filter((user) => user['name'] === name);
}
```


### 4. Getting Users by ID
	- When you define API-route, you should avoid action-names.
	- What does`/users/:id` do? 
		`:` marks a variable that is part of the URL.
