function other()
{
    function start(){
        console.log('hello')
    }
    return start()
     function start(){
        console.log('hello1')
    }
}
other() // result - hello1
