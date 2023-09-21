// Chapters 17-20 Arrays and loop | JAVASCRIPT

// Q1Declare and initialize an empty multidimensional array.
//(Array of arrays)


// var empty=new Array([],[],[]);

// for (let i=0; i<3; i++){
// for (let j=0; j<4; j++){
//     document.write(empty[i][j]+" ")
// }
// document.write("<br>")
// }

//Q2Declare and initialize a multidimensional array
//representing the following matrix:

// var numbers=new Array (["0","1","2","3"],["1","0","1","2"],["2","1","0","1"]);

// for (let i=0; i<3; i++){
// for (let j=0; j<4; j++){
//     document.write(numbers[i][j]+" ")
// }
// document.write("<br>")
// }

//Q3Write a program to print numeric counting from 1 to 10.

// for (var a = 1; a <= 10; a++) {
//   document.write(a+"<br>");
// }

//Q4 Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user

// var tableof=+prompt("Enter Number to Print table")
// var tablelen=+prompt("Enter length of table")
// document.write("Multiplication table of ", tableof)
// document.write("<br>");
// document.write("Length ",tablelen)
// document.write("<br>");
// for (let i=1;i<=tablelen;i++){
//     document.write(`${tableof} x ${i} = `,tableof*i)
//     document.write("<br>");
// }


//Q5Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// var fruits = ["apple","banana","mango","orange","strawberry"];
// var fruits = new Array ("apple","banana","mango","orange","strawberry");
// for (let i=0;i<=4; i++){
// document.write(fruits[i]+"<br>");
// }
// for (let i=0;i<fruits.length; i++){ 
// document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }

//Q6Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("Counting");
// document.write("<br>");  
// for (var c =1; c<=15; c++){
//  document.write(c+",");   
// }
// document.write("<br>"); 
// document.write("Reverse counting");
// document.write("<br>");  
// for (var r =10; r>=1; r--){
//  document.write(r+",");   
// }
// document.write("<br>"); 
// document.write("Even");
// document.write("<br>");  
// for (var e =0; e<=20; e++){
// if(e % 2 == 0){  
//  document.write(e+",");   
// }
// }
// document.write("<br>"); 
// document.write("Odd");
// document.write("<br>");  
// for (var d =0; d<=20; d++){
// if(d % 2 !== 0){  
//  document.write(d+",");   
// }
// }
// document.write("<br>"); 
// document.write("Series");
// document.write("<br>");  
// for (var s =2; s<=20; s++){
// if(s % 2 == 0){  
//  document.write(s+"k"+",");   
// }
// }

//Q7You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example

// var items=["cake","apple pie","cookie","chips","patties"]
// var search=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")
// var searchitem=search.toLowerCase()
// var itempresent=false
// for (var i=0;i<items.length;i++){
// if (searchitem==items[i]){
// itempresent=true
//  document.write(`${search} is <b>available</b> at index ${i} in our bakery`)
//   break
// }
// }
// if(itempresent==false){
//     document.write(`We are sorry, ${search} is <b>not available</b> in our bakery`)
//}

//Q8. Write a program to identify the largest number in the
//given array.
//A = [24, 53, 78, 91, 12]
// var a = [24, 53, 78, 91, 12];
// document.write("Array Items ", a);
// document.write("<br>");
// let min = a[0];
// for (let i = 1; i < a.length; i++) {
//     if (a[i] < min) {
//     min = a[i];
//     }
// }
// document.write("The smallest number is ", min);

//Q9. Write a program to identify the smallest number in the
//given array.
//A = [24, 53, 78, 91, 12]

// var a = [24, 53, 78, 91, 12];
// document.write("Array Items ", a);
// document.write("<br>");
// let max = a[0];
// for (let i = 1; i < a.length; i++) {
//     if (a[i] > max) {
//     max = a[i];
//     }
// }
// document.write("The largest number is ", max);

//Q10. Write a program to print multiples of 5 ranging 1 to
//100.


// for (var a = 1; a <= 100; a++) {
// if (a%5==0){
//  document.write(a +",");
// }
// }


// /Assignment # 21-25 JAVASCRIPT (Array of arrays)/////

//Q1 Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full nam 

// var name1 =prompt("Enter Your Name:");
// var name2 =prompt("Enter Your Father Name:");
// document.write("HELLO SIR/MA'AM "+ name1 + name2);

//Q2 Write a program to take a user input about his favorite
//mobile phone model. Find and display the length of user
//input in your browser

// var fphone=prompt("Enter Your Favorite Phone");
// document.write("My favorite phone is :"+fphone);
// document.write("<br>");  
// document.write("Length of string"+fphone.length);


//Q3 Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser .

// var str = ("Pakistani")
// document.write("String :"+ str);
// document.write("<br>");
// document.write("Index of 'n':"+ str.indexOf("n"));

//Q4 Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser.

// var str = ("Hello World")
// document.write("String :"+ str);
// document.write("<br>");
// document.write("Last Index of 'l':"+ str.lastIndexOf("l"));

//Q5 Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser

// var str = ("Pakistani")
// document.write("String :"+ str);
// document.write("<br>");
// document.write("Character at Index 3 : "+ str.charAt("3"));

//Q6 Repeat Q1 using string concat() method.

// var name1=prompt("Enter first name")
// var name2=prompt("Enter last name")
// var fullname=name1+" "+name2
// alert("Greetings "+ fullname)

//Q7 Write a program to replace the “Hyder” to “Islam” in the
//word “Hyderabad” and display the result in your browser

// var pcity="Hyderabad"
// document.write("City: "+ pcity)
// document.write("<br>")
// document.write("After replacement: "+ pcity.replace("Hyder","Islam"))

// Q8Write a program to replace all occurrences of “and” in the
//string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and
//football together.”;

// var message ="Ali and Sami are best friends.They play cricket and football together."
// document.write("Original text :"+ message)
// document.write("<br>")
// document.write("altered text :"+ message.replace(/and/g,"&"))

//Q9 Write a program that converts a string “472” to a number
//472. Display the values & types in your browser. 

// var str ="472"
// document.write("Value :"+str)
// document.write("<br>")
// document.write("Type :"+typeof(str))
// var num =parseInt(str)
// document.write("<br>")
// document.write("Value :"+num)
// document.write("<br>")
// document.write("Type :"+typeof(num))

//Q10 Write a program that takes user input. Convert and
//show the input in capital letters.

// var text =prompt ("Enter text")
// document.write("User Input :"+text )
// document.write("<br>")
// document.write("Upper case :"+ text.toUpperCase("text"))
// document.write("<br>")


//Q11 . Write a program that takes user input. Convert and
//show the input in title case.

// var text =prompt("Enter a Title")
// document.write("User Input :"+ text)
// document.write("<br>")
// document.write("Title case : "+ text.charAt(0).toUpperCase() + text.slice(1)); 


//Q12 Write a program that converts the variable num to
//string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser. 

// var num =prompt("Enter a number with decimal")
// document.write("Number :"+ num )
// document.write("<br>")
// document.write("Result :" + num.replace(/\./g,'') )

//Q13 Write a program to take user input and store username
//in a variable. If the username contains any special symbol
//among [@ . , !], prompt the user to enter a valid username.
//For character codes of [@ .

// var username=prompt("Enter username")
// var isvalid=true
// for (var i=0;i<=username.length;i++){
//     ccode=username.charCodeAt(i)
//     if(ccode === 33 || ccode === 44 || ccode === 46 || ccode === 64){
//         isvalid=false
//         alert("Please Enter a valid username")
//     }
// }
// if(isvalid==true){
//     alert("Your username is correct")
// }

//Q14 You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example: 

// var items=["cake","apple pie","cookie","chips","patties"]
// var search=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")
// var searchitem=search.toLowerCase()
// var itempresent=false
// for (var i=0;i<items.length;i++){
// if (searchitem==items[i]){
// itempresent=true
// document.write(`${search} is <b>available</b> at index ${i} in our bakery`)
// break
// }
// }
// if(itempresent==false){
//     document.write(`We are sorry, ${search} is <b>not available</b> in our bakery`)
// }

// Q15 Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
 

// var inppass=prompt("Enter Password")
// var passw = /^[A-Za-z]\w{6,}$/;
// if (inppass.match(passw)) {
//     alert("Correct, try another...");
// } else {
//     alert("Wrong...!");
// }


// Q16 Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser

// var university = "University of Karachi"
// var university=university.split("")
// for (var i = 0; i < university.length; i++){
// document.write(university[i])
//  document.write("<br>")}


//Q17 Write a program to display the last character of a user
//input 

// var uinp=prompt("Enter text")
// document.write("User input: ",uinp)
// document.write("<br>")
// document.write("Last character of input: ",uinp.charAt((uinp.length)-1))


//Q18 You have a string “The quick brown fox jumps over the
//lazy dog”. Write a program to count number of
//occurrences of word “the” in given string.


// var text="The quick brown fox jumps over the lazy dog"
// document.write("Text: ",text)
// document.write("<br>")
// var lowtext = text.toLowerCase();
// var word=lowtext.split(" ")
// count=0
// for (var i=0;i<word.length;i++){
//     if(word[i]==="the"){
//         count++
//     }
// }
// document.write(`There are ${count} occurence of the word 'the'`)
