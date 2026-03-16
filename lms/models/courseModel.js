const mongoose = require ('mongoose')

const courseSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },

    description:{
        type : String
    },

    price:{
        type : Number,
        required : true
    },

    instructur_id:{
        type : String,
        required : true
    },

    thumbnail:{
        type : String
    },

    created_at:{
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Course",courseSchema)