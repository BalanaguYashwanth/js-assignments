// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let a=[10,20,30] 
let b = a
b[1]=40
console.log(a) //[10,40,30]
console.log(b) //[10,40,30]

const a1 = {name:{title:'yash'}}
const b1 = a1
b1.name='ram'
console.log(a1) //{name:'ram'}
console.log(b1) //{name:'ram'}

-----------------------------------------------
  
let a=[10,20,30]
let b = [...a];
b[1]=40
console.log(a)
console.log(b)

const a1 = {name:{title:'yash'}}
const b1 = {...a1}
b1.name='ram'
console.log(a1)
console.log(b1)

