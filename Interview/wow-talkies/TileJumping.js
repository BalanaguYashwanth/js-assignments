
//question ---> In this array [1,2,0,0,1], Initally it will land on the 0th position of array and checks how many positions it can move if it can move last position then return  true else false

//For Example -  If we take inital position 0 in array, then value is 1 then it will move to 1 step forword and grabs the value 2 at position 1 and It will move 2 steps forword and grabs the value 0 at position 3 but it unable to move to another position due to value is 0

let a=[0]

operate(a[0],0)
function operate(max,pos)
{
    let last=0
    let curr=0
    if(max!==0)
        for(x=pos;x<=max+pos;x++)
        {
            last=a[x]
            curr=x
        }
    else if(max===0){
        if(a.length-1 === pos)
        {
            console.log(true)
            return
        }
        else{
            console.log(false)
            return
        }
    }
    console.log(last,curr)
    operate(last,curr)
}

