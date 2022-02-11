const map = new Map()

map.set(1,"hello")
map.set(2,"bye")

console.log(map.get(1))
console.log(map.has(1))
map.delete(1)
map.set(3,"chill")
console.log(map)

map.forEach( (value,key) => (
    console.log(value,key)
) )

map.forEach( (key) => (
    console.log(key)
))


for(let [key,value] of map)
{
    console.log('dood')
    console.log('keys',key,'values',value)
}
