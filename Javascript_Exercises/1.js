var colors = require('colors');
var str='';
var cols=[colors.blue, colors.red, colors.green, colors.yellow];
var randomCol=1;
var oldCol=1;
for (var i=0; i<7; i++) {
    str = str + '#'; 
    while (oldCol == randomCol) {
        randomCol = cols[Math.floor(Math.random() * cols.length)];
    }
    console.log(randomCol(str));
    var oldCol = randomCol;
}
