const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },

    price:{
        type : Number,
        required : true
    },

    file_url:{
        type: String,
        required:true
    },

    seller_id:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("product",productSchema)