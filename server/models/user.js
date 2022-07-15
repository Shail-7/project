const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
        maxLength: 10,
    },
    password: {
        type: String,
        required: true,
    }
})


const User = new mongoose.model('Users', userSchema);


module.exports = User;