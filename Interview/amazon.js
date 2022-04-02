// check the given arrary and calculate the frequency and show the output as frequency in decending order and values in ascending order
// so output as to be [ [ 2, 4 ], [ 5, 3 ], [ 1, 2 ], [ 7, 2 ], [ 6, 1 ] ] ---> Here frequency of 2's array will sorted as ascending order of their values and 
//rest of the arrays are not there to compare its values related to their frequency

//other tests input = [2,2,1,2] & output = [[2,3],[1,1]]
//other tests input = [7,3,12] & output = [[3,1],[7,1],[12,1]]

let arr=[7,7,6,5,5,5,1,1,2,2,2,2]
arr=arr.sort((a,b)=> a-b)
//console.log('arr',arr)

groupSort(arr)

function groupSort(arr) {
    let updatedarr=[]
    let single=[]
    //let change=false
    for(let i=0;i<arr.length;i++)
    {
        let flag=0
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i]===arr[j])
            {
                flag=flag+1
            }
        }
        if(!single.includes(arr[i]))
        {
            
            single.push(arr[i])
            updatedarr.push([arr[i], flag])    
        }
    }
    
var change=false
//updatedarr.map((a,b)=>console.log())
    for(let a=0;a<updatedarr.length;a++)
    {
        for(let b=a+1;b<updatedarr.length;b++)    
        {
            if(updatedarr[a][1]!=updatedarr[b][1] )
            {
                change=true
            }
        }
    }
    
    if(change==true)
    {
    var freqarr = updatedarr.sort( (a1,b1) => b1[1] - a1[1]  )
    }else{
        freqarr=updatedarr
    }

    //const latestarr = freqarr.sort((a2,b2) =>{ if(a2[1] == b2[1]) {a2[0] - b2[0]}})
    //let filterarr=[]
    // for(let i=0;i<freqarr.length;i++)
    // {
    //     let newflag=0
    //     for(let j=i;j<freqarr.length;j++)
    //     {
    //         //console.log(freqarr[i])
    //         if(freqarr[i][1] === freqarr[j][1])
    //         {
    //             newflag=newflag+1
    //         }
    //     }
    //     if(newflag==1)
    //     {
    //         filterarr.push(freqarr[i])
    //         //freqarr.splice(i,1)
    //     }
    // }
    
    console.log(freqarr)
}



