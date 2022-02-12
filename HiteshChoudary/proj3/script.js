const datas=[
  {
    courseName:'react',
    price:5,
  },
  {
    courseName:'angular',
    price:3,
  },
  {
    courseName:'vue',
    price:2.4,
  }
]

function generateList(){
  let ul = document.querySelector('.list-group')
  ul.innerHTML=""
  datas.forEach((data) => {
    let li=document.createElement("li")  
    let txt=document.createTextNode(data.courseName)
    li.classList.add("list-group-item")
    li.appendChild(txt)
    ul.appendChild(li)
  })
}

const button = document.querySelector('.sortbutton')
button.addEventListener("click",function(){
  datas.sort( (a,b) => {return a.price - b.price })
  console.log(datas)
  generateList()
} )

window.addEventListener('load',generateList)


