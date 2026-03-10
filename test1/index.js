const express = require('express')
//const cors = require(cors)
const app = express()

app.use(express.json())
//app.use(cors())

app.get("/",(req,res)=>{
    console.log("hello mern")
    res.send("hello mern")
})

app.listen(3000,()=>{
    console.log("server running successfully")
})