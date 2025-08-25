const fs=require('fs').promises;
const http=require('http')
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
    } else if(url.includes('writeFile')){
        fs.writeFile("hello.txt","hello everyone",ENCODING).then(data=>{
            console.log("successfully written")
            res.end("successfully written")
        }).catch(err=>{
            console.log("error occurs",err)
        })

    } else if (url.includes('rename')) {
        let oldname = url.split("=")[1].split("&")[0]
        let newname = url.split("=")[2]
        fs.rename(oldname, newname,ENCODING).then(() => {
            console.log(`Renamed ${oldname} to ${newname}`);
            res.end(`Renamed ${oldname} to ${newname}`);
        }).catch(err => {
            console.log("Error renaming file", err);
            res.end("Error renaming file");
        });
    } else if(url.includes('delete')){
        //  /delete?filename=cdf.txt
        let delfile=url.split("=")[1]
        fs.unlink(delfile).then(()=>{
            console.log("file deleted",delfile)
            res.end("file deleted succesfully ",delfile)
        }).catch(err => {
            console.log("Error renaming file", err);
            res.end("Error renaming file");
        });
    }
})

server.listen(PORT,function(err){
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})