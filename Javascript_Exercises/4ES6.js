console.log(sum(1, 2, 3));

function sum(...arr){
    let total=0;
    for (const a of arr){
        total += a;
    }
    return total;
}