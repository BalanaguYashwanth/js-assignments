var count=document.querySelector('.counter')
window.addEventListener('unload',function(){
    var num = parseInt(localStorage.getItem('windowcount')||0);
    num++;
    localStorage.setItem('windowcount',num)
  
})
count.innerText=localStorage.getItem('windowcount')   
console.log(count.innerHTML)
if(count.innerText >= 10)
{
    document.querySelector('.followers').innerText='congratulations you got more followers !!!'
}
