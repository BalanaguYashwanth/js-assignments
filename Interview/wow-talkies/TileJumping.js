/* .
question ---> In this array [1,2,0,0,1], Initally it will land on the 0th position of array and checks how many positions it can move based out of that value not position
if it can move last position then return  true else false

For Example -  If we take inital position 0 in array, then value is 1 then it will move to 1 step forword and.
grabs the value 2 at position 1 and It will move 2 steps forword and 
grabs the value 0 at position 3 but it unable to move to another position due to value is 0

Test Cases - 
[1,2,3] - True
[0] - True
[1,2,0,0,1] - False
*/ 


operate(a[0],0)
function operate(max,pos)
{
    let last=0
    let curr=0
    if(max!==0 && max+pos<=a.length-1)
        for(x=pos;x<=max+pos;x++)
        {
            last=a[x]
            curr=x
        }
    else {
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
    //console.log(last,curr)
    operate(last,curr)
}


