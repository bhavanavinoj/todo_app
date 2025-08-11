// function even(num) {
//     if (num % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// function sumeven(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         if(even(i)){
//             sum += i;
//         }   
//     }
//     console.log(sum)
// }

// sumeven(20);
// sumeven(3);
// sumeven(5);


// factorial

// function findFact(n){
//     let fact=1
//     for(let i=2;i<=n;i++){
//         fact=fact*1
//     }
//     console.log(fact)
// }
// findFact(5)


function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Output: 120

