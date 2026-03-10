const express=require('express');
const app=express();
app.use(express.json())
const cors=require('cors')
app.use(cors());

let users=[{
    name:"bhavana",
    age:22,
    mark:95,
    email:"bhavana@gmail.com"
},{
    name:"arun",
    age:23,
    mark:93,
    email:"arun@gmail.com"
},{
    name:"anu",
    age:30,
    mark:85,
    email:"anu@gmail.com"
}]

app.get("/getAllUsers",function(req,res){
    res.json(users)
})

app.post("/insertUser",function(req,res){
    let data=req.body
    let emails = users.map(u=>u.email)
    if(emails.includes(data.email)){
        res.send("email already exists")
    } else{
        users.push(data)
        res.send("inserted successfully!!!")
    }
})

app.delete("/deleteUser", function (req, res) {
    let email = req.query.email;        
    let i = users.findIndex(u => u.email === email); 

    if (i === -1) {
        res.send("no such email");
    } else {
        users.splice(i, 1);             
        res.send("deleted");
    }
});


app.listen(3000)