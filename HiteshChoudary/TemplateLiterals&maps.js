var nickname='hites\'h'
var delivery = 'emjoies\"'
var fullname = `Hello this is ${delivery} ${nickname}`


console.log(fullname.includes("emjoies"))
console.log(fullname.charAt(0))
console.log(fullname.endsWith('h'))
console.log(fullname.toUpperCase())

const ahello=["apple", "orange", "cherry"]
ahello.forEach((b)=>(console.log(b)))


const hello ="yash"
console.log(hello)

var map = new Map()
map.set(hello,'bash')
console.log('has',map.has(hello))
console.log('get',map.get(hello))
map = Object.fromEntries(map) // converting map object to json object

console.log(map)

var rename = new Map(Object.entries(map)) // convertinf json object to map object
console.log(rename) 

//hello = "bash"


