const person  = {
    firstname: 'Dhanunjaya',
    lastname: 'Lakshmi',
    getName: function() {
        const fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
};

const personDetails  = function(snack, hobby) {
    console.log(this.getName() + " loves " + snack + " and " + hobby);
};

/* Using bind JS engine creating a new 'personDetails' instance and binding 'person' as its 'this' variable.
    It is creating a copy of the personDetails function  */

const personNew = personDetails.bind(person); 
personNew("Pizza", "Programming");

/* The call() method calls a function with a given this value and arguments provided individually and executes the function it was called upon right away.
    Accepts additional parameters as well */
personDetails.call(person, "Pizza", "Programming");

/* The apply() method works as call() method. The only difference is call() accepts all the parameters individually 
but apply() accepts the parameters as an array */
personDetails.apply(person, ["Pizza", "Programming"]);