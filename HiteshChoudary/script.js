var firstName="Yashwanth";
var lastName="Guru";
/*console.log(`
    First Name: ${firstName};
    Last Name: ${lastName};
`)*/
var answer = 20 > 50;
var sum = Math.round(2.333)
var auth = false
//console.log(auth ? 'yes' : 'no')
//var user = "developer1"

var getdata =function (user,role)
{
    switch(role){

        case "admin":
            console.log('i am admin',user)
        break;
        case "developer":
            console.log('i am developer',user)
        break;
        default:
            console.log('nothing',user)
        break;
    }    
}

console.log(getdata('yash','admin'))




