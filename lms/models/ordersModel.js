const mongoose = require ('mongoose')

const orderSchema = new mongoose.Schema({
    user_id:{
        type : Number,
        required : true
    },

    amount:{
        type : Number,
        required : true
    },

    payment_status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending"
    },

    created_at:{
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("order",orderSchema)