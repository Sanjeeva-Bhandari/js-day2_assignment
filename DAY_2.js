//Q.1  take input from user

console.log("Hello");
//let age = prompt("What is your age","20");
//console.log(age);




//Q.2 ex. of methods of string and array
var na = ['Sanjeeva',20,'karate','dog'];
console.log("string is" + na );

var m1 = na.sort()  //Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

var m2 = na.splice() //The zero-based location in the array from which to start removing elements.

var m3 = na.toLocaleString() //Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

var m4  = na.toString() //Returns a string representation of an array.

var m5 = na.unshift() //Inserts new elements at the start of an array.

var m6 = na.values() //Returns an iterable of values in the array


//array
let arr = ['one','two',true,32,'three',['1','2',3]];
console.log(arr);

//to check wether it is array or not
//if its array it will return true
//if its other than array it will return false
console.log(Array.isArray(arr));

//indexOf('value')

//to reverse the array 
let revarr = arr.reverse();
console.log(revarr);
console.log(arr);
console.log(arr[3]);
let arr2 = ['rio','berlin','alicia'];

//to concatinate two arrays
console.log(arr.concat(arr2));

//appending an element

//at the start
arr2.unshift('tokyo')
console.log(arr2);

//at the end
arr2.push('helksd');
console.log(arr2);



//removing an element

//at the start
arr2.shift('tokyo')
console.log(arr2);

//at the end
arr2.pop();
console.log();


//Q3. Ask the user if he is 21+ and log the value "can drink","Cannot Drink"

console.log("Hello");
var age = prompt("Are you above 21 year","21");
if (age>=21){
    console.log("You can drink : ");
}
else{
    console.log("you cannot drink :");
}



