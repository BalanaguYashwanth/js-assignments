
//self excuting anonymous
(function(){
    console.log('num')
})()

function sum(x)
{
    return function(y){
        return x+y
    }
}

//var operate=sum(2)

//console.log(operate(10))

console.log(sum(2)(2))
