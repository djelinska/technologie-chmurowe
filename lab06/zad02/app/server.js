const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://db/my_database');

const Schema = mongoose.Schema;
const dataSchema = new Schema({
	name: String,
	age: Number,
});
const Data = mongoose.model('Data', dataSchema);

const initialData = new Data({ name: 'John', age: 30 });
initialData.save();

app.get('/', async (req, res) => {
	try {
		const allData = await Data.find();
		res.status(200).json(allData);
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ message: 'Wystąpił błąd podczas pobierania danych' });
	}
});

// Serwowanie aplikacji na porcie 3000
app.listen(port, () => {
	console.log(`Aplikacja jest dostępna na porcie ${port}`);
});
