const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    user_id: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
        maxLength: 20
    }
})

const Project = new mongoose.model('Projects', projectSchema);

module.exports = Project;