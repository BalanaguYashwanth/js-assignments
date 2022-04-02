//aba = true , abb = false, a= true, bbb = true , bba = false
//first and last character should same

let main = 'aba'
let re=/^([a-z]).*$/g
let a=re.exec(main)

console.log(a);
