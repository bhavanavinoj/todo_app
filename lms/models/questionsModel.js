const mongoose = require ('mongoose')

const questionSchema = new mongoose.Schema({
    exam_id:{
        type : Number,
        required : true
    },

    question_text:{
        type : String,
        required : true
    },

    type:{
        type : String,
        enum:['MCQ','TEXT'],
        default:'MCQ'
    }
})

module.exports = mongoose.model("questions",questionSchema)