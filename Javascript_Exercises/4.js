console.log(sum([1, 2, 3]));

function sum(arr){
    var arrayLength = arr.length;
    var total = 0;
    for (var i=0; i<arrayLength; i++ ){
        total = total + arr[i];
    }
    return total;
}