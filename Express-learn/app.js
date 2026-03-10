const express=require('express');
const app=express();
const cors=require('cors')
app.use(cors());

let names=[]

app.get("/getAllUsers",function(req,res){
    res.json(names)
})

app.post("/insertUsers",function(req,res){
    let name=req.query.name
    names.push(name)
    res.send("inserted")
})

app.delete("/deleteUsers",function(req,res){
    let name=req.query.name
    let i=names.indexOf(name)
    if(i==-1){
        res.send("no such name")
    } else {
        names.splice(i,1)
        res.end("deleted")
    }
})

app.put("/updateUsers",function(req,res){
    let oldName=req.query.oldName
    let newName=req.query.newName
    let i=names.indexOf(oldName)
    if(i==-1){
        res.send("no such name")
    } else {
        names[i]=newName
        res.end("updated")
    }
})

app.delete("/deleteAllUsers",function(req,res){
    names=[]
    res.send("deleted successfully")
})

app.listen(3000)