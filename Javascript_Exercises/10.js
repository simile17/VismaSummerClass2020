function spy(f) {
    return new Spy(f);
}

class Spy extends Function {
  constructor(f) {
    super('return arguments.callee._call.apply(arguments.callee, arguments)')
    this.f = f;
    this.totalCalls = 0;
  }

  report() {
    return {
        totalCalls: this.totalCalls
    };
  }
  
  _call(...args) {
      this.totalCalls ++;
      this.f(...args);
  }
}

var spied = spy (console.log);
spied("ymca");
spied("ymca");
spied("ymca");
spied("ymca");
spied("ymca");
console.log(spied.report());