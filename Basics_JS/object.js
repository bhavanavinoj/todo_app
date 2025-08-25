// const person={
//     fname: 'bhavana',
//     lname: 'vinoj',
//     age: 25,
//     country: 'india',
//     skills:[
//         'html',
//         'java',
//     ],
//     getFullName: function(){
//         return `${this.fname} ${this.lname}`
//     },
//     'phnone number': '+673562789'
// }



// const person = {
//   firstName: 'Asabeneh',
//   age: 250,
//   country: 'Finland',
//   city:'Helsinki',
//   skills: ['HTML', 'CSS', 'JS'],
//   title: 'teacher',
//   address: {
//     street: 'Heitamienkatu 16',
//     pobox: 2002,
//     city: 'Helsinki'
//   },
//   getPersonInfo: function() {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//   }
// }



// const copyPerson = Object.assign({}, person)
// console.log(copyPerson)

// const keys = Object.keys(copyPerson)
// console.log(keys) 
// const address = Object.keys(copyPerson.address)
// console.log(address) 

// const values = Object.values(copyPerson)
// console.log(values)

// const entries = Object.entries(copyPerson)
// console.log(entries)

// console.log(copyPerson.hasOwnProperty('firstName'))
// console.log(copyPerson.hasOwnProperty('score'))



// const names=['bhavana','vinoj','jyutica','raj']
// let [,sperson, ,forthperson]=names
// console.log(sperson,forthperson)


// const nums=[1,2,3,4,5,6,7,8,9]
// let [num1,num2,num3,...rest]=nums
// console.log(num1,num2,num3)
// console.log(rest)



// const rectangle={
//     width: 20,
//     height: 10,
//     area: 200
// }
// let {width: w,height: h,area: a,perimeter: p}=rectangle
// console.log(w,h,a,p)


// const rect = {
//   width: 20,
//   height: 10
// }
// const calculatePerimeter = rectangle => {
//   return 2 * (rectangle.width + rectangle.height)
// }

// console.log(calculatePerimeter(rect))




// const todoList = [
// {
//   task:'Prepare JS Test',
//   time:'4/1/2020 8:30',
//   completed:true
// },
// {
//   task:'Give JS Test',
//   time:'4/1/2020 10:00',
//   completed:false
// },
// {
//   task:'Assess Test Result',
//   time:'4/1/2020 1:00',
//   completed:false
// }
// ]

// for (const {task, time, completed} of todoList){
//   console.log(task, time, completed)
// }


//    swapping numbers using destructing
// let a = 5;
// let b = 10;
// [a, b] = [b, a];
// console.log("a:", a); 
// console.log("b:", b); 


// let num=-5
// if(num>0){
//   console.log (`${num} is positive`)
// } else if(num<0){
//   console.log (`${num} is negative`)
// } else {
//   console.log (`${num} is 0`)
// }

// let num=10
// console.log(num.toString())


// let string='javascript'
// console.log(string.includes('j'))


// let num=13
// if(num%5==0 && num%3==0){
//   console.log(`${num} is divisible by 5 and 3`)
// } else {
//   console.log('it is not divisible')
// }


// function stringName(name){
// console.log(name.includes('j'))
// }
// stringName('javascript')



// function revStr(name){
// let split=name.split('')
// let reverse=split.reverse()
// let join=reverse.join('')
// console.log(join)
// }
// revStr('javascript')


// function randNum(){
// console.log(Math.random()* 100)
// }
// randNum()


// let array=[1,2,3,4,5]
// let sum=0
// for(let i=0;i<array.length;i++){
//   if(array[i]%2==0){
//     sum=sum+i
//   }
// }


// function isEven(i){
//   return i%2==0
// }
// function sumEven(array){
//   let sum=0
//   for (let i=0;i<array.length;i++){
//     if(isEven(array[i])){
//       sum=sum+array[i]
//     }
//   }
//   console.log(sum)
// }
// sumEven([1,2,3,4])


function avgNum(array){
  let sum=0
  let avg=0
  for(let i=0;i<array.length;i++){
    sum=sum+array[i]
    avg=sum/array.length
  }
  console.log(avg)
}
avgNum([1,2,3,4])

