const express=require('express');
const app=express();

let names=["bhavana","anu","jai"]

app.get("/checkIfNameIsPresent",function(req,res){
    let name=req.query.name
    if(names.includes(name)){
        res.send("true")
    } else {
        res.send("false")
    }
})

app.listen(3000)