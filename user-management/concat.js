const fs=require('fs').promises;
const http=require('http')
const PORT=3000
const ENCODING='utf8'
const PART1="part1.txt"
const PART2="part2.txt"

const server=http.createServer((req,res)=>{
    let url=req.url
    if(url.includes('readFile')){
        fs.readFile(PART1,ENCODING).then(data=>{
            fs.readFile(PART2,ENCODING).then(data1=>{
                let secfile=data+data1
                fs.readFile(secfile,ENCODING).then(resl=>{
                    res.end(resl)
                })
                }).catch(err=>{
                     console.log("failed")
                })
        })
    }
})

server.listen(PORT,function(err){
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})