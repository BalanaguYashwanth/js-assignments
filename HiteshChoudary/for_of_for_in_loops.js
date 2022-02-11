const states = ["Rajastan","Kolkata","Bangalore","chennai"]

for( const n of states) //use 'of' in loops when using array
{
    console.log(n)
}

const symbols={
    in:'INDIA',
    uk:'UNITEDKINDOM',
    us:'UNITEDSTATES',
}

for(const n in symbols)
{
    console.log(symbols[n])
}

var user={
    firstName:'yash',
    lastName:'balanag',
    education:'b.e',
    count:function(){ // It is object so 'this' refers to the function
        console.log('LINE 24',this.education,this.firstName)
        function sayhello() // It is function so 'this' refers to window object
        {
            console.log('LINE 27',this) 
        }
        sayhello()
    }
}

console.log(user.count())
