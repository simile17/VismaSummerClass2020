var arr = [1, 4, 1, 2, 4, 5, 2, 5, 6];
console.log(remDub(arr));
console.log(arr);

function remDub (arr) {
    var arrLength = arr.length;
    var arrDub = arr.slice();
    arrDub.sort();
    var res = [arrDub[0]];
    for (var i=1; i < arrLength; i++) {
        if (arrDub[i-1] != arrDub[i]) {
            res.push(arrDub[i]);
        }
    }
    return res;
}