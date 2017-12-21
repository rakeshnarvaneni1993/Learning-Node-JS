var sample = {
    firstName : 'Rakesh',
    lastName : 'Narvaneni',
    printFirstName : () => {
        console.log(this.firstName);
        console.log(arguments);
    },
    printLastName : function() {
        console.log(arguments);
        console.log(this.lastName);
    },
}

sample.printFirstName(1,2,3);
sample.printLastName(1,2,3);