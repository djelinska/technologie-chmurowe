const express = require('express');
const mongoose = require('mongoose');
const app = express();

const hostname = 'localhost';
const port = 8080;

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.error(err));

const dataSchema = new mongoose.Schema({
	name: String,
	value: String,
});

const Data = mongoose.model('Data', dataSchema);

app.get('/', async (req, res) => {
	try {
		await Data.create({ name: 'test nazwa', value: 'test wartosc' });
		const data = await Data.find();
		res.json(data);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
