const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
	.connect('mongodb://db/my_db')
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('Error connecting to MongoDB:', err));

const User = mongoose.model('User', {
	name: String,
	last_name: String,
});

app.get('/users', async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		console.error('Error fetching users:', error);
		res.status(500).json({ error: 'Error fetching users' });
	}
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
