function insertName(array,name){
    if(array.includes(name)){
        console.log('already name exist')
    } else {
        array.push(name)
        console.log(array)
    }
}
insertName(['anu','jithu','fathima'],'jyutica')