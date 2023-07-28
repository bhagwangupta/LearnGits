/* var x = "Hello BKG <br/>";
var y = "AI BI Street Pvt Ltd";
var z = 44;
document.write(x);
document.write(y)
document.write("<br/>");
document.write(typeof x);
document.write("<br/>");
document.write(typeof z); */
/* var x= 50;
/* console.table([1,2,3]); */
/* console.error("Something went wrong"); */
/* console.time("Test")
console.warn("This is warning");
console.warn("This is warning");
console.warn("This is warning");
console.warn("This is warning");
console.timeEnd("Test") */
/* console.clear(); */

/* If Statement */

/* var a = 100;
var b = 100;
if(a == b){
    document.write("A is equal to B");
} */
/* var age=22;
if(age >= 18 || age<=21){
    document.write("You are eligible");
}
 */
/* var a = 20;
var b = 15;
if(!a >=12);{
    document.write("You are eligible");
}
 */
/* If Else Statement */

/* var x = 55;
if(x > 30){
    document.write("X is Greater");
}else{
    document.write("X is Smaller");
} */
/* var x = '100';
if(x === 100){
    document.write("X is Equal");
}else{
    document.write("X is not Equal");
} */

/* var name = 'BK Gupta';
var gender = "Male";
if(gender == "Male"){
    document.write("Hello Mr." + name);
}else{
    document.write("Hello Miss." + name);
}
 */
/* If Else If Statement */
/* var per = 60;

if(per >= 80 && per<= 100){
    document.write("You are in Merit.");
}else if(per >= 60 && per< 80){
    document.write("You are in 1st Devision.");
}else if(per >= 45 && per< 60){
    document.write("You are in 2nd Devision.");
}else if(per >= 33 && per< 45){
    document.write("You are in 3rd Devision.");
}else if(per < 33){
    document.write("Sorry you are not passed.");
}else{
    document.write("Please Enter Valid");
}
 */
/* Conditional Ternary Operator */

/* var a = 100;
var b;
(a == 500)? b = "True" : b = "False"; 
document.write(b); */

/* Switch Case Tutorial  */

/* var day = 5;

switch (day){
    case 0:
    document.write("Today is Monday");
    break;
    case 1:
    document.write("Today is Tuesday");
    break;
    case 2:
    document.write("Today is Wednesday");
    break;
    case 3:
    document.write("Today is Thursday");
    break;
    case 4:
    document.write("Today is Friday");
    break;
    case 5:
    document.write("Today is Saturday");
    break;
    case 6:
    document.write("Today is Sunday");
    break;
    default :
    document.write("Please Enter correct Date");
} */

/*  Alert Box */

/* var a = 21;
var b = 20;
if(a > b){
    alert("A is Greater than B");
}else{
    alert("A is Smaller than B");
}
  */

/* Confirm Box */

/* var a = confirm("Do you like coding");
if(a){
    alert("Thanks");
}else{
    alert("Sorry");
}
 */

/* Prompt Box */

/* var a = prompt("What is your name?");
alert(a); */
/* 
var per = prompt("What is your Percentage :");

if(per >= 80 && per<= 100){
    document.write("You are in Merit.");
}else if(per >= 60 && per< 80){
    document.write("You are in 1st Devision.");
}else if(per >= 45 && per< 60){
    document.write("You are in 2nd Devision.");
}else if(per >= 33 && per< 45){
    document.write("You are in 3rd Devision.");
}else if(per < 33){
    document.write("Sorry you are not passed.");
}else{
    document.write("Please Enter Valid Percentage");
} */

/* Functions */
/* function hello(){
    document.write("Hello Mr. BKG<br/>");
}
function hello1(){
    document.write("Hello Mr. Developer<br/>");
}
hello1();
hello();
hello();
hello();
hello1(); */

/* Functions with Parameters */
/* function hello(fname = "BK", lname = "Gupta"){
    document.write("Hello " + fname + " " +lname + "<br/>");
} 
function sum(a, b){
    document.write(a+b);
}
 hello("Golu" , "Singh");
 hello();
 hello("Sonu" , "Singh");
 sum(20, 20); */

 /* Functions with Return Value */

 /* function fullname(fname = "BK", lname = "Gupta"){
   
    var a = fname + " " +lname;
    return a; 
} 
var fn = fullname("BK","Gupta");
document.write(fn); */

/* function sum(math, phy, chem, eng, hindi){
    var s = math + phy + chem + eng + hindi;

    return s;
}
function percentage(tot){
    var per = tot/500 * 100;
    document.write(per);
}
var total = sum(80, 70, 60, 70, 80);
percentage(total); */

/* Global & Local Variable */
/* 
function hello(){
    var a = "BK Gupta";
    document.write(a+ "<br/>");
}
hello();
document.write(a); */

/* Events Tutorial */