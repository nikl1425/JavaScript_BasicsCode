
// objects in js are containers
var Niklas = new Object();

Niklas.living = true;
Niklas.name = "Niklas";
Niklas.age = 33;
 // without methods our objects will only store static information
Niklas.getAge = function(){
    return Niklas.age
}

console.log(Niklas)
console.log(Niklas.getAge())


// string are also in a sence objects just like above
var myString = new String("foo")
console.log(myString)

// Constructor function
var Person = function(living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function(){
        return this.gender;
    }
}

var cody = new Person(true, 33, 'male')

console.log(cody)

var myArray = new Array();
console.log(typeof myArray) // logs object! because we use constructor function

var myNewArray = []
console.log(typeof myNewArray) // also logs object