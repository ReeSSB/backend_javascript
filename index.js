const express = require("express");
require("dotenv").config();

// Assigning Express to App.
const app = express();

// Middleware
app.use(express.json());

// PORT Assigned
const PORT = process.env | process.env.PORT;

// App is listening
app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT}`);
});

// GET method REST API
app.get("/chaideploy", (req, res) => {
	res.status(200).send({ message: "Welcome to the server! Server is listening..." });
});

app.get("/twitter", (req, res) => {
	res.status(200).send({ twitterHandle: "shashi1" });
});

app.get("/login", (req, res) => {
	res.send("<h1>Please login at chai aur code on youtube.<h1/>");
});

app.get("/youtube", (req, res) => {
	res.send("<h2>youtube.com<h2/>");
});
