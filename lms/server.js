const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRouter = require('./routes/userRoute')
const courseRoute = require('./routes/courseRoute')
const examRoute = require('./routes/examRoutes')

app.use(express.json())

app.use("/uploads", express.static("uploads"));
app.use('/lms',userRouter)
app.use('/lms',courseRoute)
app.use('/lms',examRoute)

mongoose.connect('mongodb://localhost:27017/lmsdb')
    .then(()=>{
        console.log("mongodb connected successfully")
    }).catch((err)=>{
        console.log(err)
    })

app.listen(3000,()=>{
    console.log("Server running succesfully in the port:3000")
})