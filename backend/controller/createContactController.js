// import 
const Contact = require('../model/contactModel');

// logic
exports.createContact = async (req, res) => {
    try {
        // extract data from request body
        const {name, phone, email} = req.body;

        // create a new object and insert in DB
        const response = await Contact.create({name, phone, email});

        // send a json response with a success flag
        res.status(200).json({
            success: true,
            data: response,
            message: "Contact created successfully"
        });
    }
    catch(err) {
        console.log(err);
        console.error(err);
        res.status(500).json({
            sucess: false,
            data: "Internal Server Error",
            message: err.message
        })
    }
}