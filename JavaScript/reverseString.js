//Gebe einen String rückwärts aus

var str = '';

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));

console.log('-----------------');

function shortReverse(str) {
        return str.split('').reverse().join('');   
}

console.log(shortReverse('nochmalhello'));

console.log('-----------------');

const solution = str => str.split('').reverse().join('');

console.log(solution);


/*
Aufwendigere Lösung (Siehe unten) mit vorgefertigten Funktionen aber wenn man diese lange Lösung kurz fast, ist sie noch kompakter
--------------------------------------
function reverseString(str){
  return str.split('').reverse().join('');  
}
---------------------------------------------

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString("hello");
*/