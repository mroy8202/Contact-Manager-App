// import 
const mongoose = require('mongoose');

// route handler
const contactSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: true,
    },
    contactPhone: {
        type: Number,
        required: true,
    }, 
    contactEmail: {
        type: String,
        required: true,
    }
});

// export
module.exports = mongoose.model("Contact", contactSchema);