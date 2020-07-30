var text = "Mama, just killed a man";
console.log(wordSearch("just"));

function wordSearch(w) {
    if (typeof w !== 'string' || w.includes(" ")) {
        return console.log("Invalid text or word.")
    }
    var res = text.split(" ");
    for (var i=0; i<res.length; i++){
        if (res[i] == w) {
            return true;
        }
    }
    return false;
}