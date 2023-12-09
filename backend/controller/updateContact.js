// import the model
const Contact = require('../model/contactModel');

// define route handler
exports.updateContact = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, phone, email } = req.body;

        const update = await Contact.findByIdAndUpdate(
            {_id: id},
            {name, phone, email}
        );

        res.status(200).json(
            {
                success: true,
                data: update,
                message: "Contact Updated successfully"
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
