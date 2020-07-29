console.log(range (5, 15));

function range(x, y){
    var arr=[];
    for (var i=x; i<y; i++) {
        arr.push(i);
    }
    return arr;
}