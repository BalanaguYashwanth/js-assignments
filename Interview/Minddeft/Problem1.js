//Execute callback functions

function hello(obj)
{
    return obj
}

function bye()
{
    console.log('bye')
}

const result=hello(bye)
result()
