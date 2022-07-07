//Dependencies and Modules
	const express = require('express');
	const mongoose = require('mongoose');
	const dotenv = require('dotenv');

//Environment Setup
	dotenv.config();
	let cred = process.env.MONGODB;

//Server Setup
	const app = express();


	mongoose.connect(cred)
	.then(()=>{
		console.log('Connected to MongoDB');
		})
	.catch((e)=>{
		console.log("Something went wrong", e);
		});


mongoose.connection.on("disconnected", ()=> {
	console.log("MongoDB disconnected!")
});

mongoose.connection.on("connected", ()=> {
	console.log("MongoDB connected!")
});

app.get("/", (req,res)=>{
	res.send("Homepage");
})

app.listen(8000, ()=>{
	console.log("Connected to backend.");
});