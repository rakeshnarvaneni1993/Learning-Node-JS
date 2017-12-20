var divide = (a,b) => {
    console.log("Divided in seperate file", a/b);
}

var multiply = (a,b) => {
    console.log("Multiplied in seperate file", a*b);
}


var substract = (a,b) => {
    console.log("Substracted in seperate file", a-b);
}

var add = (a,b) => {
    console.log("Added in seperate file", a+b);
}

module.exports = {
    divide,
    multiply,
    substract,
    add
}

