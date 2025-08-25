const express=require('express');
const app=express();

app.use(express.json());

let names=["bhavana","anu"]

app.get("/getAllUsers",function(req,res){
    res.json(names)
})

app.post("/insertUsers",function(req,res){
    let name=req.body.name
    let i=names.includes(name)
    if(i){
        res.send("name already exist")
    } else {
        names.push(name)
        res.send("inserted successfully")
    }
})

app.delete("/deleteUsers",function(req,res){
    let name=req.body.name
    let i=names.indexOf(name)
    if(i==-1){
        res.send("no such name")
    } else {
        names.splice(i,1)
        res.end("deleted")
    }
})

app.put("/updateUsers",function(req,res){
    let oldName=req.body.oldName
    let newName=req.body.newName
    let i=names.indexOf(oldName)
    if(i==-1){
        res.send("no such name")
    } else {
        names[i]=newName
        res.end("updated")
    }
})

app.listen(3000)