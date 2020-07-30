console.log(sevenAte9(123));

function sevenAte9(x){
    if (typeof x !== 'number'){
        return console.log("Wrong type!");
    }
    var y = x.toString();
    if (y.length < 3){
        return y;
    }
    var previous = y[0];
    var current = y[1];
    var str = "";
    str = str.concat(previous);
    for (var i=2; i<y.length; i++){
        var next = [y[i]];
        if (!(current == '9' && previous == '7' && next == '7')){
            str = str.concat(current);
        }
        previous = current;
        current = next;
    }
    str = str.concat(next);
    return str;
}