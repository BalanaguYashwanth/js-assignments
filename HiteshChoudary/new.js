var user = function(username,number){
       this.username = username;
       this.number = number;
       this.count = function(){
           console.log( ` the value is ${this.number}`)
       }
} 

user.prototype.getuser=function(){
    console.log(`this is ${this.username} `)
}



var nam1 =new user('yash',3)

console.log(nam1.getuser())


if(nam1.hasOwnProperty("username"))
{
    console.log(nam1.username)
}


//var nam2 =new user('guru',5)

//console.log(nam2.count())

