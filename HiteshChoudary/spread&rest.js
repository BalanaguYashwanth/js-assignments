function hello(a,b,...args)
{
    let sum=0;
    multi=a*b;
    for(let val of args)
    {
        sum=sum+(val)
    }
    return [multi,sum]
}

console.log(hello(2,2,3,3,3))
