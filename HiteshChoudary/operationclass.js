const User = require('./classes')

const yash = new User("yash","yash@startups.com")

yash.enrollCourse("cloud")
yash.enrollCourse("DS")
yash.enrollCourse("web3")
console.log(yash.getCourses())
console.log(yash.getinfo())

let alldata = yash.getCourses()

//alldata.forEach((data) => (console.log(data)) )

console.log("hello",yash.courseList)
