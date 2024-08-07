#!/usr/bin/env node

const express = require('express');
const app = express();

const PORT = 7865;

app.use(express.json())

app.get("/", (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.send("Welcome to the payment system");
});

app.get('/cart/:id([0-9]+)', (req, res) => {
	res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
	const obj = {
		payment_methods: {
			credit_cards: true,
			paypal: false,
		},
	};
	res.json(obj);
});

app.post('/login', (req, res) => {
	const username = req.body.userName;
	res.end(`Welcome ${username}`);
});

app.listen(PORT, () => {
	console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
