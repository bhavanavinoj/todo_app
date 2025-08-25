

const fs=require('fs').promises;

// fs.readFile('app.txt').then(data =>{
//     console.log('started...',data.toString());
// }).catch(err=>{
//     console.log('error',err)
// }).finally((err=>
//     console.log('finally')
// ))


// fs.writeFile('abc.txt','gudni8').then(data=>{
//     console.log('file written success',data);
// }).catch(err=>{
//     console.log('error',err)
// }).finally((err=>
//     console.log('finally')
// ))


// const dirname = 'app.txt'
// fs.readFile(dirname,'utf8').then(res=>{
//     fs.readFile(res,'utf8').then(data=>{
//         console.log(data)
//     })
// })


// fs.appendFile('abc.txt',' morning').then(data=>{
//     console.log('file written success',data);
// }).catch(err=>{
//     console.log('error',err)
// })


const http=require('http')
const PART1_NAME='part1.txt'
const PART2_NAME='part2.txt'
const PORT=3000
const ENCODING='utf8'

const server=http.createServer((req,res)=>{
    let url=req.url
    if(url.includes('readFile')){
        fs.readFile(url.split('=')[1],ENCODING).then(data=>{
            console.log(data)
            res.end(data)
        }).catch(err=>{
            console.log('no such API' + url.split('=')[1] )
        })
    } else if(url.includes('writeFile')) {
        let filename=url.split('=')[1].split('&')[0]
        let content=url.split('=')[2]
        
        content=content.replaceAll("%20", " ")

        fs.appendFile(filename,content).then(()=>{
            res.end('successfully written')
        })
    } else if(url.includes('getAllUsers')){
        fs.readFile('users.json',ENCODING).then(users=>{
            res.end(users)
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