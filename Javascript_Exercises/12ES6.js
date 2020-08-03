var calc = new Calculator(0);
amount = calc.add(5).multiply(2).add(20).divide(3);
console.log(calc.value);

function Calculator(val) {
   let calc = {
       value: val,
   }

   calc.add = (x) => {calc.value += x; return calc};
   calc.multiply = (x) => {calc.value = calc.value*x; return calc};
   calc.divide = (x) => {calc.value = calc.value/x; return calc};
   calc.subtract = (x) => {calc.value -= x; return calc};

   return calc;
}
