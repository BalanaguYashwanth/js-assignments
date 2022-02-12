cards = document.querySelectorAll('.card')

cards.forEach((card)=>{
  card.addEventListener("click",flip)
})
var isflipped = true 
var firstflip
var secondflip

function flip(){
  this.classList.add('flip')
  if(isflipped==true)
  {
    firstflip = this
    isflipped=false
    console.log('firstflip')
  }
  else
  {
    secondflip = this
    console.log('secondflip')
    check()
  }
}

function check(){
  if(firstflip.dataset.image===secondflip.dataset.image)
  {
    firstflip.removeEventListener('click',flip)
    secondflip.removeEventListener('click',flip)
    reset()
    console.log('sucess')
  }
  else{
      setTimeout(function(){
          firstflip.classList.remove('flip')
          secondflip.classList.remove('flip')
          reset()
          console.log('fail')

        },1000
      )
  }
}

function reset()
{
  isflipped=true
  firstflip=null
  secondflip=null
} 

// function flip(detail){
//   if(detail.classList.value == 'card')
//   {
//     detail.classList.add('flip')
//   }
//   else if(detail.classList.value == 'card flip')
//   {
//     detail.classList.remove('flip')
//   }
//   console.log(detail.classList.value)
// }
