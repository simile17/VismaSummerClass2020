console.log(sum([1, 2, 3, [4, 5, [6, 7, [8, 9]]]]));

function sum (x){
    if (typeof x == 'number'){
        return x;
    }
    if (!Array.isArray(x)){
        return console.log("Wrong type!");
    }
    var total = 0;
    for (var i=0; i<x.length; i++){
        total += sum(x[i]);
    }
    return total;
}