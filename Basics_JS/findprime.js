// function isPrime(number){
//     if(number<=1){
//         return false
//     }
//     for(let i=2;i<=number;i++){
//         if(number%i==0){
//             return false
//         } else {
//     return true
//     }
// }
// }
// function maxNum(number){
//     let arr=[]
//     for(let i=1;i<=number;i++){
//         if(isPrime(i)){
//             console.log(i)
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }

// maxNum(50);


function checkNum(array,num){
     if(array.indexOf(num)==-1){
        console.log('num not present')
        return true
     } else {
        console.log('num is present')
         return false
     }
 }

checkNum([2,3,4,5],3)



