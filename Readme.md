This simple program illustrates the difference between ES6 Arrow functions and regular JavaScript functions.


Arrow Functions:

 1. 'this' inside an arrow function does not point to the object it is in and it is undefined.
 2. 'arguments' inside an arrow function also remains undefined even though there are arguments passed into the arrow function.


JavaScript Regular Functions:

 1. 'this' inside the function refers to the same object it is in.
 2. 'arguments' refer to an object to the arguments passed to the function.
    Ex: printLastName(1,2,3) ==> {'1':1,'2':2,'3':3}