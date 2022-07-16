//////TYPESCRIPT-OPTIONAL EXTRA FEATURES -> STAIC TYPED etc///////////////////////

export {} //Need to declare the export for converting script into module
const name:string  = 'yash' // here we need to use mostly let and const instead of var (recommended)
let sum:number; // need to assing the datatype for the any variable because typescript is static typed language
sum=20; // For let can reassign but not const 
//console.log(name,sum) //get the output 

let isBeginner:Boolean = true;
let total:number = 10
let myname:string = 'yash'

//null and undefined can assign to any variable
isBeginner =  null 
total = undefined

//arrays

let items : Array<number> = [12,43,34] 
let basket : Array<string> = ['hello','yash']
let mixedBasket : [string,number,boolean] = ['billPaid',20,true]

//enum
enum Color{Black=3,Red,Blue,Green}
let c:Color = Color.Blue
console.log(c)

//any - Can assign any type -> number, boolean, string and call functions etc

let random : any  = 20;
random = true;
random = 'hello';
//random() //won't cause error
random.toUpperCase();

//unknown - Can assign any type -> number, boolean, string etc but can't callFunctions to the variables etc

let strictRandom:unknown = 'hello';
//strictRandom() //cause error
(strictRandom as string).toUpperCase();

//some cases we can use types as optional but it is not recommended

//case(i) - Below snippet not assigned to anytype so it assumes that future assign can be anytype 
let a;
a=true
a=20
a='hey man'

//case(ii) - Below snippet will cause error because it is already initialised with number so it assumes future assign need to be number
let b=20;
//b=true
//b='hey man'

//union types
let isChair:number|boolean
isChair=1
isChair=true
//isChair='present' -> will case an error


//Types with functions & optional with return static typed

function add(a:number,b?:number) :number //here a is required and b is optional, the thumb rule 1st place always required and 2nd is optional
{
    if(b) return a+b
    else return a
}

let result:number = add(2)
console.log('result',result)

//Default paramters

function sub(a=10,b:number):string{
    return 'submited'
}
//const subResult = sub(1,2)
console.log(sub(1,2))

//Interfaces

//Basic
function process(person:{firstname:string, secondname:string}){
    console.log(person.firstname,person.secondname)
}

process({
    firstname:'yash',
    secondname:'kumar'
})

//Advanced

interface fruits{
    name:string;
    size:number;
}

function show(f:fruits){
    console.log(f)
}

show({
    name:'pine',
    size:20
})

//classes

class Employee{

    employeename:string;

    constructor(name:string){
        this.employeename=name
    }

    greed(){
        console.log(this.employeename)
    }

}

class Manager extends Employee{

    constructor(name1:string){
        super(name1)
    }

    delegateWork(){
        console.log(` yes here we need ${this.employeename}`)
    }

}

let m1 = new Manager('yash')
m1.greed()
m1.delegateWork()
