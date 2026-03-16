const mongoose = require ('mongoose')

const livesessionSchema = new mongoose.Schema({
    course_id:{
        type : Number,
        required : true
    },

    title:{
        type : String
    },

    meeting_link: {
        type: String,
        required: true
    },

    scheduleTime: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("live_session",livesessionSchema)