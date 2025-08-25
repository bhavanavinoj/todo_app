function avgArray(array){
    let sum=0
    for(let i=0;i<array.length;i++){
        sum=sum+array[i]
    }
    console.log(sum)
    let avg=sum/array.length
    console.log(avg)
}
avgArray([2,3,4,5,6])