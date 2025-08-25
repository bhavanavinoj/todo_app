const http=require('http')
let users=[{"id":1,"name":"Neddie"},
{"id":2,"name":"Rowland"},
{"id":3,"name":"Imelda"},
{"id":4,"name":"Ramona"},
{"id":5,"name":"Gavan"},
{"id":6,"name":"Amye"},
{"id":7,"name":"Tobey"},
{"id":8,"name":"Shaun"},
{"id":9,"name":"Raoul"},
{"id":10,"name":"Cara"},
{"id":11,"name":"Antonie"},
{"id":12,"name":"Alexandr"},
{"id":13,"name":"Katlin"},
{"id":14,"name":"Aidan"},
{"id":15,"name":"Wallie"},
{"id":16,"name":"Tory"},
{"id":17,"name":"Lonny"},
{"id":18,"name":"Kristopher"},
{"id":19,"name":"Jennifer"},
{"id":20,"name":"Rivalee"},
{"id":21,"name":"Addy"},
{"id":22,"name":"Brion"},
{"id":23,"name":"Jackelyn"},
{"id":24,"name":"Hewitt"},
{"id":25,"name":"Vicki"},
{"id":26,"name":"Hasty"},
{"id":27,"name":"Matty"},
{"id":28,"name":"Vaughn"},
{"id":29,"name":"Rebecca"},
{"id":30,"name":"Torey"},
{"id":31,"name":"Donna"},
{"id":32,"name":"Kinsley"},
{"id":33,"name":"Odilia"},
{"id":34,"name":"Huntley"},
{"id":35,"name":"Nedda"},
{"id":36,"name":"Nelie"},
{"id":37,"name":"Douglas"},
{"id":38,"name":"Raviv"},
{"id":39,"name":"Flynn"},
{"id":40,"name":"Sisely"},
{"id":41,"name":"Daniele"},
{"id":42,"name":"Cheryl"},
{"id":43,"name":"Emmanuel"},
{"id":44,"name":"Susanne"},
{"id":45,"name":"Aldo"},
{"id":46,"name":"Bamby"},
{"id":47,"name":"Brant"},
{"id":48,"name":"Lyon"},
{"id":49,"name":"Wandie"},
{"id":50,"name":"Alvera"}]

const server=http.createServer(function(req,res){
    
    const url=req.url;
    if(url.includes('pagination')){
        // /pagination?pagenum=1&count=10
        let pagenumber=url.split("=")[1].split("&")[0]
        let count=url.split("=")[2]

        let startindex=(pagenumber-1)*count;
        let endindex=startindex+count;

        let pagenateduser=user.splice(startindex,endindex)
        res.end(json.stringify(pagenateduser))
    }   
})
server.listen(port,function(err){
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})