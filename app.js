var secondFile = require('./second.js')

var argv = process.argv;
var lengthOfArgv = argv.length;
var a = 5;
var b = 10;
if(argv[lengthOfArgv-1] === 'add'){
    console.log(a+b);
} else if(argv[lengthOfArgv-1] === 'substract'){
    console.log(a-b);
} else if(argv[lengthOfArgv-1] === 'multiply'){
    console.log(a*b);
} else if(argv[lengthOfArgv-1] === 'divide'){
    console.log(a/b);
}else if(argv[lengthOfArgv-1] === 'pass and divide'){
    secondFile.divide(a,b);
}else if(argv[lengthOfArgv-1] === 'pass and multiply'){
    secondFile.multiply(a,b);
}else if(argv[lengthOfArgv-1] === 'pass and substract'){
    secondFile.substract(a,b);
}else if(argv[lengthOfArgv-1] === 'pass and add'){
    secondFile.add(a,b);
}
else{
    console.log('Command not recognized');
}


