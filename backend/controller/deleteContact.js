// import the model
const Contact = require('../model/contactModel');

// define route handler
exports.deleteContact = async(req, res) => {
    try {
        // find id 
        const { id } = req.params;
        await Contact.findByIdAndDelete(id);

        res.json(
            {
                sucess: true,
                message: "Contact deleted successfully"
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
