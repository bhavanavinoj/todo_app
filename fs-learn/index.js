const fs=require ('fs')

let filename='locator.txt'
let encoding='utf8'


fs.readFile(filename,encoding,function(error,filecontent){
    if(error){
        console.log('error',error)
    } else {
        console.log('success',filecontent)
        fs.readFile(filecontent,encoding,function(err2,maincontent){
        if(err2){
            console.log('error2',err2)
        } else {
            console.log('read successfully',maincontent)
        }
      })
    }
})