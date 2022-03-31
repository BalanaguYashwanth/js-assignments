let x=1
const hello = new Promise((resolve,reject)=>{
    if( x==0)
    {
        resolve(console.log('done'))  
        
    }
    else{
        reject(console.log('not done'))
    }
})
