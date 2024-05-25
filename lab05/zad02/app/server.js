const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 8080;

app.get('/', (req, res) => {
	res.statusCode = 200;
	const currentDate = new Date();
	res.json({ currentDateTime: currentDate });
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});