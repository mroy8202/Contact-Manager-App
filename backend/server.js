// import 
const express = require('express');
require("dotenv").config();
const dbConnect = require('./config/database');
const contact = require('./routes/contact');

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());

// mount
app.use("/api/v1", contact);

// database connection
dbConnect();

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

app.get("/", (req, res) => {
    res.send("<h1>This is a server side homepage.</h1>")
});