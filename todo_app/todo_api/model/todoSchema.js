const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Todo", todoSchema);