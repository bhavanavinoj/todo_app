// let numbers=[2,4]
// console.log('array',numbers)
// let sum=0
// let avg=0
// for(let i=0;i<numbers.length;i++){
//     sum=sum+numbers[i]
//     avg=sum/numbers.length
// }
// console.log('sum is',sum)
// console.log('avg is',avg)


//    even sum

// let nums=[1,2,3,4]
// console.log('array',nums)
// let sum=0
// for(let i=0;i<nums.length;i++){
//     console.log('data',nums[i])
//     if(nums[i]%2==0){
//         sum=sum+nums[i]
        
//     }
// }
// console.log(sum)



//     odd number

// let nums=[1,2,3,4]
// console.log('array',nums)
// let sum=0
// for(let i=0;i<nums.length;i++){
//     console.log('data',nums[i])
//     if(nums[i]%2!==0){
//         sum=sum+nums[i]
        
//     }
// }
// console.log('sum of odd',sum)


function isPrime(n){
    for(let i=2;i<=n;i++){
        if(n%i==0){
            return false
        } else {
            return true
        }
    }
}
console.log(isPrime(3))
console.log(isPrime(10))








