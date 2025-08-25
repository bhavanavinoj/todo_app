const fs=require('fs').promises;
const http=require('http')
const PORT=3000
const ENCODING='utf8'

const server=http.createServer((req,res)=>{
    let url=req.url
    if(url.includes('readFile')){
        fs.readFile(url.split('=')[1],ENCODING).then(data=>{  //http://localhost:3000/readFile?fileName=java.txt
            res.end(data)
        }).catch(err=>{
            res.end(err)
        })
    } else if(url.includes('insert')){
        
    }
})

server.listen(PORT,function(err){
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})