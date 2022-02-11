//console.log(name) //unremove while learning
var name = 'guru'
hello()
function hello(){
    var name="yash"
    //console.log(name)
}
//console.log(name) //unremove while learning
function even(n)
{
    return n%2==0
}
var a=[2,6,4,8]
//console.log([2,4,6,8].every(even))
console.log(a.every((a) => {  //this tells all elements in the array carries even numbers or odd numbers 
    return a%2 == 0
 } ))
a=[2,3,4,5,6,7,8]

//console.log(a.fill('yash'))

console.log(a.fill('yash',2,5))
b=[9,8,4,5,2,1]
console.log(b.filter( (b) => (b<5)))
console.log(b.filter( (b) => (b!=5)))

c=[1,2,3,5]
console.log(c.slice(1,3))
const d=["Banana", "Orange", "Apple", "Mango"]
d.splice(2,0,"Hello","Bye")
console.log(d)

var user={
    courseName:'react',
    fbauth:true,
    gauth:true,
    role:'admin',
    courseList:[],
    buyCourse:function(course){
        this.courseList.push(course)
    },
    getCourse:function(){
        return `gauth: ${this.gauth} and ${this.courseList}`
    },
    info:function(){
        return `courseName: ${this.courseName}, fauth:${this.fbauth},role:${user.role} ,gauth: ${this.gauth} and ${this.courseList.length}`
    }

}

user.buyCourse('mango')
user.buyCourse('flutter')
console.log(user.info())
console.log(user.buyCourse())
