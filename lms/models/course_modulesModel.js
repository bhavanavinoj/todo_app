const mongoose = require ('mongoose')

const coursemodulesSchema = new mongoose.Schema({
    course_id:{
        type : String,
        required : true
    },

    title:{
        type : String
    },

    order:{
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("Course_module",coursemodulesSchema)