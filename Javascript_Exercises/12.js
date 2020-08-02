var calc = new Calculator(0);
amount = calc.add(5).multiply(2).add(20).divide(3);
console.log(calc.value);

function Calculator(val) {
   var calc = {
       value: val,
   }

   calc.add = function(x) {calc.value += x; return calc};
   calc.multiply = function(x) {calc.value = calc.value*x; return calc};
   calc.divide = function(x) {calc.value = calc.value/x; return calc};
   calc.subtract = function(x) {calc.value -= x; return calc};

   return calc;
}

