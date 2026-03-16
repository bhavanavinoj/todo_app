const mongoose = require ('mongoose')

const lessonSchema = new mongoose.Schema({
    module_id:{
        type : String,
        required : true
    },

    title:{
        type : String
    },

    video_url:{
        type : String,
        required : true
    },

    duration:{
        type : Number,
        required:true
    }
})

module.exports = mongoose.model("lesson",lessonSchema)