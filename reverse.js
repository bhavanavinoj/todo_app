//     reverse a string
// function revString(name){
//     console.log(name.split("").reverse().join(" "))
// }
// revString("jithin");



//         paliandrome  
// function checkPali(name){ 
//     let letters=name.split("")
//     console.log(letters)
//     let revLet=letters.reverse()
//     console.log(revLet)
//     let joinLet=revLet.join("")
//     console.log(joinLet)
//     if(name==joinLet){
//         console.log('its paliandrome')
//     } else {
//         console.log('its not paliandrome')
//     }
// }
// checkPali("malayalam")


// without function paliandrome
    // let names="malayalam"
    // let letters=names.split("")
    // console.log(letters)
    // let revLet=letters.reverse()
    // console.log(revLet)
    // let joinLet=revLet.join("")
    // console.log(joinLet)
    // if(names==joinLet){
    //     console.log('its paliandrome')
    // } else {
    //     console.log('its not paliandrome')
    // }



//    remove first elemnt from array
// let array=[1,2,3,4]
// array.splice(0,1)
// console.log(array)



//      fibnocci series
// function fib(n){
//     let n1=0
//     let n2=1
//     console.log(n1)
//     console.log(n2)

//     for(let i=3;i<=n;i++){
//         let n3=n1+n2     
//         console.log(n3)    
//         n1=n2    
//         n2=n3
//     }
// }
// fib(10)


//           Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers
// let array=[1,2,3,4,5,6]
// function even(){
// let evenArr=[]
// for(let i=0;i<array.length;i++){
//     if(array[i]%2==0){
//         evenArr.push(array[i])
//     }
// }
// console.log(evenArr)
// }
// even()



//          Find the largest number in an array in JavaScript
// let array=[23,36,1,5]
// let maxelement=array[0]
// for(let i=1;i<array.length;i++){
//     if(array[i]>maxelement){
//         maxelement=array[i]
//     }
// }
// console.log(maxelement)



//   find min element
// let array=[23,36,1,5]
// function maxElement(){
// let minelement=array[0]
// for(let i=1;i<array.length;i++){
//     if(array[i]<minelement){
//         minelement=array[i]
//     }
// }
// console.log(minelement)
// }
// maxElement()


//       vowels
// function str(name){
// let count=0
// let vowels='aeiouAEIOU'
// for(let i=0;i<name.length;i++){
//     if(vowels.includes(name[i])){
//         count++
//     }
// }
// console.log(count)
// }
// str('jyutica')



//        Find the Longest Word in a String in JavaScript 
// let string='welcome to javaScript'
// function findLong(){
// let split=string.split(" ")
// console.log(split)
// let word=split[0]
// for(let i=1;i<split.length;i++){
// if(split[i]<word){
// word=split[i]
// }
// }
// console.log(word)
// }
// findLong()



//       Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array. 

// function sumPos(array){
// let sum=0
// for(let i=0;i<array.length;i++){
//     if(array[i]>0){
//         sum=sum+array[i]
//     }
// }
// console.log(sum)
// }
// sumPos([1,-3,4,-8])



//         Write a function in JavaScript that finds the second highest number in an array of numbers.
function secLarge(array){
let largest=array[0]
let secLargest=[]
for(let i=0;i<array.length;i++){
    if(largest<array[i]){
        secLargest=largest
        largest=array[i]
    }
}
console.log(secLargest)
}
secLarge([1,2,5,3])
