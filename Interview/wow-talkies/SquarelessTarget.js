/*
   Print the 2 square less than targeted number if number is 100 then need to print 64 which is 2^6 because it is less than target number and next number will be 128 i,e 2^7
*/

num=100 //targeted number
function operation(num)
{
    let res=0
    let i=0
   while(res<num)
   {
       res=Math.pow(2,i)
       i++
   }
  console.log(Math.pow(2,i-2))
}

operation(num)
