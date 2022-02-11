class User{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    getinfo(){
        console.log(`hey there ${this.name} and my email is ${this.email}`)
    }
    #courseList=[]
    enrollCourse(course){
        return this.#courseList.push(course)
    }
    getCourses(){
        return this.#courseList
    }
}


module.exports=User

