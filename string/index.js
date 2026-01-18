// //trim()
// let msg = " hello world";
// console.log("Trimmed:", msg.trim());
// //Removes the leading and trailing white space and line terminator characters from a string.
// //slice()
// let lang = "Javascript";
// console.log("Slice(0,4):", lang.slice(0, 4));
// //substring()
// console.log("Substring(4,10):", lang.substring(4, 10));
// //replace()
// // let greeti = "Hello world";
// //split()
// let names = "Aman,Ravi,Neha";
// let namesArray = names.split(",");
// //Split a string into substrings using the specified separator and return them as an array.
// console.log("Split:", nameArray);
// //concat()
// let a = "Hello";
// let b = "World";
// console.log("Concat:", a.concat(" ", b));
// //Returns a string that contains the concatenation of two or more strings
// //template literals
// let userName = "Aman";
// let age = 22;
// console.log(`My name is${userName} and age is${age}`);
// //Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
// //startswith()
// let email = "admin@gmail.com";
// console.log("Starts with email:",email.startsWith("admin")); // true

// //endswith()
// console.log("Ends with .com:",email.endsWith(".com")); // true

// //slice()
// let language = "JavaScript";
// console.log("Slice(0,4):",language.slice(0, 4)); // Java        

// //substring()
// console.log("Substring(4,10):",lang.substring(4, 10)); // Script        

// //replace()
// let greet = "Hello World";
// console.log("Replace:",greet.replace("World", "Node")); // Hello Node.js

// //replaceAll()
// let hiText = "hi hi hi";
// console.log("Replace all:",hiText.replaceAll("hi", "hello")); // hello hello hello
// //ITS REPLACE ALL WITH GIVEN INPUT

// //String Comparision
// let password="1234";
// let inputPass="1234";
// console.log("Password Match:",password==inputPass);
// //cOMPARE STRING OF BOTH

// //String Immutability
// let str="Hello";
// str.toUpperCase();
// console.log("Immutable String:",str);

// //Converts all the alphabetic characters in a string to uppercase.
// //rEA
//Email Validation
let userEmail = "user@gmail.com";

if (userEmail.includes("@") && userEmail.endsWith(".com")) {
    console.log("Valid Email");
}else{
    console.log("Invalid Email");
}

// //Real Backend Example - Password Trim
let userPassword ="admin123";
userPassword=userPassword.trim();
console.log("Trimmed Paasword :",userPassword);

// //count word in string
let sentence2 = "Node js backend learning";
let words = sentence2.split(" ");
console.log("Word Count:",words.length);
