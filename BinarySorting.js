//arr=[9,4,7,6,3,1,5]

arr=[9,4,7,6,3,1,5]

function mergesort(arr,l,r)
{
    if(l<r)
    {
        let mid=(l+r)/2
        mid=Math.floor(mid)
        arr=sortcheck(arr,l,mid)
        arr=sortcheck(arr,mid+1,r)
        arr=merge(arr,l,mid,r)
        console.log(arr)
    }
}

function sortcheck(a,initial,final)
{
    for(let i=initial;i<=final;i++)
    {
        let dummy=0
        for(let j=i+1;j<=final;j++)
        {
            if(a[i]>a[j])
            {
                dummy = a[j]
                a[j]=a[i]
                a[i]=dummy
            }   
        }
    }
    return a
}


function merge(arr,l,mid,r)
{
    let b=[]
    let j=l
    let i=mid+1
    for(k=0;k<=r;k++)
    {
        if(arr[i]<arr[j] && i <= r)
        {
            b[k]=arr[i]
            i++
        }else {
            b[k]=(arr[j])
            j++
        }
    }
    arr=[...b]
    return arr
}

mergesort(arr,0,arr.length-1)
