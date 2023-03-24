//---Excercise 1
document.writeln("Excercise 1.");

let number = Math.floor((Math.random() * 10) - 5);

if (number < 0) {
    document.writeln("The number is negative" + "(" + number + ")");
}
else if (number = 0) {
    document.writeln("The number is 0")
}
else {
    document.writeln("The number is positive" + "(" + number + ")");
}
document.write("<br>")



//---Excercise 2
document.writeln("Excercise 2.");

let x = Math.floor((Math.random() * 10));
let y = Math.floor((Math.random() * 10));
let z = Math.floor((Math.random() * 10));
let largestNum = " is the largest number which is ";
document.writeln("In x" +  "(" + x + ");" + " y" + "(" + y + ");" + " z" + "(" + z + ");" + " the largest num variable is:");
document.write("<br>");

if (x > y && x > z) {
    document.writeln("X" + largestNum + x);
}
else if (y > x && y > z) {
    document.writeln("Y" + largestNum + y);
}
else {
    document.writeln("Z" + largestNum + z);
}



//---Excercise 3
document.write("<br>");
document.writeln("Excercise 3.");

let score = Math.floor((Math.random() * 10) + 1);

document.writeln("The student's score is " + score + ";")
if (score <= 5) {
    document.writeln("The student gets an F");
}
else if (score >= 5 && score < 7) {
    document.writeln("The student gets a C");
}
else if (score >= 7 && score < 9) {
    document.writeln("The student gets a B");
}
else {
    document.writeln("The student gets an A");
}



//---Excercise 4
document.write("I have no idea how to solve it....")

