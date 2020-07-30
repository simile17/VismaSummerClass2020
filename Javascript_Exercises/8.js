console.log(f(5)('e'));

function f(x){
    if (typeof x !== 'number'){
        return console.log("Wrong type");
    }
    return function (y){
        if (typeof y!== 'number'){
            return console.log("Wrong type");
        }
        return x+y;
    };
}
