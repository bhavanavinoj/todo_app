const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const todoRoutes = require("./routes/todoRouter")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/tododb")
.then(()=>{
    console.log("mongodb connected")
})

app.use("/todo", todoRoutes);

app.listen(3000, () => {
    console.log("Server running successfully");
});