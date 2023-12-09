// import the model
const Contact = require('../model/contactModel');

// define route handler
exports.getContact = async(req, res) => {
    try {
        //fetch all contacts from database using find function
        const contacts = await Contact.find({});
        
        // response
        res.status(200).json(
            {
                success: true,
                data: contacts,
                message: "Entire contacts are fetched"
            }
        )
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
