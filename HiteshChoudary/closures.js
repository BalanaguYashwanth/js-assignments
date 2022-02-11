var data={
    firstName : "yashwanth",
    lastName : "balanag",
    job:'nothing',
    getinfo:function(){
        console.log(`total name is ${this.firstName} and ${this.lastName}`)
    }
}

const dj={
    firstName : "ram",
    lastName : "bash",
    work:'home',
    place:'chennai'    
}

//data.getinfo.bind(dj)()
data.getinfo.call(dj)
