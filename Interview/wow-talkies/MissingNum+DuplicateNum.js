
/*
  Question - If the array is [1,2,2,4] ---> Here dupliacte Number is 2 and Missing Number is 3 so need to check with maximum number inclusive 
  and should checks the other missing number and .
  
*/
a=[1,2,2,4]
var duplicate=new Set()
var missingNum = []
var max=0
for(let i=0;i<a.length;i++)
{
    let flag=0
    for(let j=0;j<a.length;j++)
    {
        if(a[j]>max)
        {
            max=a[j]
        }
        if(a[i]===a[j])
        {
          flag=flag+1  
        }
    }
    if(flag>=2)
    {
        duplicate.add(a[i])
    }
}

for(let k=1;k<=max;k++)
{
    if(!a.includes(k))
    {
        missingNum.push(k)
    }
}

let sum=0
let misssum=0

for(let z of duplicate)
{
    sum=sum+z
}

for(let l of missingNum)
{
    misssum=misssum+l
}


let total = sum + misssum
console.log(total)
