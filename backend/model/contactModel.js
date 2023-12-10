// import 
const mongoose = require('mongoose');

// route handler
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    phone: {
        type: Number,
        required: [true, "10 digit phone number required"],
        minlength: 10
    }, 
    email: {
        type: String,
    }
});

// export
module.exports = mongoose.model("Contact", contactSchema);