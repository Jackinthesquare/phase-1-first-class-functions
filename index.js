const receivesAFunction = (f) => {
    return f()
}


function fn () {
    console.log("yes")
}

function returnsANamedFunction () {
    return fn
}


function returnsAnAnonymousFunction () {
    return (function (){
    })
}