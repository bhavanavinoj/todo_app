const mongoose = require ('mongoose')

const mcqoptionSchema = new mongoose.Schema({
    question_id:{
        type : Number,
        required : true
    },

    option_text:{
        type : String,
        required : true
    },

    isCorrect: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("mcqoption",mcqoptionSchema)