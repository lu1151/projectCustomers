const mongoose = require("mongoose");

// Defining schema
const costomersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    sex: String,
    email: {
        type: String,
        required: true
    },
    hobbies: [String],
    birthday: Date
});

// Creating model
const Costomer = mongoose.model("Customer", costomersSchema);

// export Costomer
module.exports = Costomer