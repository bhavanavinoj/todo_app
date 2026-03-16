const mongoose = require ('mongoose')

const examSchema = new mongoose.Schema({
    course_id:{
        type : Number,
        required : true
    },

    title:{
        type : String,
        required : true
    },

    duration:{
        type : Number,
        required:true
    },

    passing_score:{
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("exam",examSchema)