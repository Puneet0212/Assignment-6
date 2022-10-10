var firstNumber = parseInt(window.prompt("Enter the first integer:"));
var secondNumber = parseInt(window.prompt("Enter the second integer:"));

if(firstNumber > secondNumber){
    window.document.write("The first number is larger than the second: " + firstNumber);
}
else if(secondNumber > firstNumber){
    window.document.write("The second number is larger than the first: " + secondNumber);
}
else{
    window.document.write("Both the numbers are equal!");
}
