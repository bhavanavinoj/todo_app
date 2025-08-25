const express=require('express');
const app=express();
app.get("/hello",function(req,res){
    res.send("hello world")
})

app.get("/square",function(req,res){
    let num=parseInt(req.query.num)
    let square=num*num
    res.send("square is : "+square)
})

app.get("/-sum",function(req,res){
    let num1=parseInt(req.query.n1)
    let num2=parseInt(req.query.n2)
    res.send("sum = "+(num1+num2))
})

app.listen(3000)