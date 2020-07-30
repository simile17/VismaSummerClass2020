console.log(say("Hello,")("it's me!"));

function say(x){
    if (typeof x !== 'string'){
        return console.log("Wrong type");
    }
    return function (y){
        if (typeof y!== 'string'){
            return console.log("Wrong type");
        }
        return x+" "+y;
    };
}