const express=require('express')
const app=express()
app.use(express.json())

let users=[]

app.get("/getUser",(req,res)=>{
    res.json(users)
})

function getId(){
    let  lastId=0
    if(users.length == 0){
        lastId=1
    }else{
        lastId=users[users.length-1].id + 1
    }
    return lastId
}

function isEmailDuplicate(email){
    let duplicateFound=false;
    for(let i=0;i<users.length;i++){
        if(users[i].email.toLowerCase()==email.toLowerCase()){
            duplicateFound=true;
        }
    }
    return duplicateFound
}

function isValidEmail(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}



app.post("/insertUser",(req,res)=>{
    let data=req.body    
    if(data.hasOwnProperty('name')){   
        if(data.hasOwnProperty('age')){
            if(data.hasOwnProperty('marks')){
                if(data.hasOwnProperty('email')){
                    if(isEmailDuplicate(data.email)){    
                       res.send("Email already exists " + data.email)
                    }else{
                        if(data.name.length>=3){ 
                            if(Number.isFinite(data.age)) {    
                                if(Number.isFinite(data.marks)){
                                    if(data.age>=17 && data.age<=30){   
                                        if(data.marks>=0 && data.marks<=100) {  
                                            if(isValidEmail(data.email)){
                                                let user={
                                                    name:data.name,
                                                    age:data.age,
                                                    marks:data.marks,
                                                    email:data.email,
                                                    id:getId()
                                                }
                                            users.push(user)
                                            res.send("inserted succesfully  " + data.name)
                                            }else{
                                               res.end("please enter email in valid format")
                                            }
                                            
                                        } else{
                                            res.send("mark within 0 to 100")
                                        }
                                     
                                    }else{
                                        res.send("age must be within 17 to 30")
                                    }
                                     
                                } else{
                                    res.send("marks must be number")
                                }  
                              
                            }else{
                                res.end("age must be number")
                            } 
                             
                        }else{
                            res.send("name must be minimum 3 letters")
                        }
                    
                    }
                    
                }else{
                    res.send("email is mandatory")
                }
            }else{
                res.send("mark is mandatory")
            }
           
        }else{
            res.send("age is mandatory")
        }
    
    }else{
        res.send("name is mandatory")
    }
    
})

app.get("/getNameByLetter",(req,res)=>{
    let char=req.query.char.toLowerCase(); 
    let matchedNames=users.map(user=>user.name).filter(name=>name.toLowerCase().startsWith(char))
    if(matchedNames.length>0){
        res.send(matchedNames)
    }else{
        res.send("no name start with letter" + char)
    }
    
})

app.get("/average",(req,res)=>{
    let sum=0
    for(let i=0;i<users.length;i++){
        sum=sum+users[i].marks
    }
    let average=sum/users.length
    res.send(average)

})

app.put("/updateUser",(req,res)=>{
    let data=req.body
    let id=parseInt(req.query.id)
    let index=users.map(user=>user.id).indexOf(id)
    if(index == -1){
        res.send("no such user")
    }else{if(data.hasOwnProperty('name')){   
        if(data.hasOwnProperty('age')){
            if(data.hasOwnProperty('marks')){
                if(data.hasOwnProperty('email')){
                    if(isEmailDuplicate(data.email)){    
                       res.send("Email already exists " + data.email)
                    }else{
                        if(data.name.length>=3){ 
                            if(Number.isFinite(data.age)) {    
                                if(Number.isFinite(data.marks)){
                                    if(data.age>=17 && data.age<=30){   
                                        if(data.marks>=0 && data.marks<=100) {  
                                            if(isValidEmail(data.email)){
                                                users[index]={
                                                     id:id,
                                                     name:data.name,
                                                     age:data.age,
                                                     marks:data.marks,
                                                     email:data.email
                                                } 
                                             res.send("updated successfully") 
                                            }else{
                                               res.end("please enter email in valid format")
                                            }
                                            
                                        } else{
                                            res.send("mark within 0 to 100")
                                        }
                                     
                                    }else{
                                        res.send("age must be within 17 to 30")
                                    }
                                     
                                } else{
                                    res.send("marks must be number")
                                }  
                              
                            }else{
                                res.end("age must be number")
                            } 
                             
                        }else{
                            res.send("name must be minimum 3 letters")
                        }
                    
                    }
                    
                }else{
                    res.send("email is mandatory")
                }
            }else{
                res.send("mark is mandatory")
            }
           
        }else{
            res.send("age is mandatory")
        }
    
    }else{
        res.send("name is mandatory")
    }
    }
})
        
    






app.listen(3000)