const express = require('express');
const router = express.Router();

// import controllers
const { createContact } = require('../controller/createContactController');
const { getContact } = require('../controller/getContact');
const { deleteContact } = require('../controller/deleteContact');
const { updateContact } = require('../controller/updateContact');

// api routes
router.post("/createContact", createContact);
router.get("/getContact", getContact);
router.delete('/deleteContact/:id', deleteContact);
router.put('/updateContact/:id', updateContact);

// export 
module.exports = router;