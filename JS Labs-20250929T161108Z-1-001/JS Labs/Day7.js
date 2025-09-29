// 1- Write a function that greets a user, using a default parameter for the name.
function greet(name = "Mostafa") {
    console.log(`Hello, ${name}`);
}
console.log(greet());

// 2- Write a function that calculates the total price with a default tax rate parameter.
function total(tax = 1.2){
    const price= 200
    const totalPrice = price * tax 
    console.log('Total price is: ${totalPrice}');
}
console.log(total())
// 3- Write a function that creates a user object, using a default role parameter.
function createUser(name="geust", age= 26, role ="user") {
    return {
        name,
        age,
        role
    };
}
console.log(createUser());
console.log(createUser("anyone not me ", 30, "Mostafa"));

// 4- Write a function that multiplies any number of arguments using the rest operator.
function multiply(...args) {
    return args.reduce((a, b) => a * b);
}
console.log(multiply(1, 2, 3,5));

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multiplyBySum(first, ...rest) {
    const sum = rest.reduce((acc, curr) => acc + curr, 0);
    return first * sum;
}
console.log(multiplyBySum(2, 3, 4));

// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function combineStrings(...strings) {
    return strings;
}


// 7- Create a new array by combining two arrays using the spread operator.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// 8- Copy an array using the spread operator.
const Arr =[1,2,3]
const newArr = [...Arr];
console.log(newArr);


// 9- Merge two objects into one using the spread operator.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// 10- Update a property in an object using the spread operator to create a new object.
const updatedObj = { ...obj1, b: 4 };
console.log(updatedObj);

// 11- Destructure an array to get the first and second elements into variables.
const Arr2 = [1,2,3,4,5]
const [a,b]= Arr2
console.log(a)
console.log(b)
// 12- Destructure an array to get the first element and the rest into another array.
const Arr3 = [1,2,3,4,5]
const[c,...rest]=Arr3
console.log(c)
console.log(rest)
// 13- Destructure an object to extract two properties into variables.
const person = {
    name: "mostafa" , age : 26 , role : "user" 
}
const {name , age}= person
console.log(name)
console.log(age)

// 14- Destructure an object and rename the extracted properties.
const person1 = {
    name1: "mostafa" , age1 : 26 , role : "user" 
}
const {name1 = just, age1= 222}= person1
console.log(name1)
console.log(age1)
// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function printPerson({name, age}) {
    console.log(name);
    console.log(age);
}
printPerson(person);
