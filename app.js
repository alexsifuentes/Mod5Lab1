// Name: Alex Sifuenets
//Student ID: 1226486237
//Date: 10/19/2025

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

app.use(loggerMiddleware);

app.get('/', (req, res) => {res.send('Welcome to lab 5!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});