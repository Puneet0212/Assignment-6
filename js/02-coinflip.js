var coinFlip = Math.floor(Math.random() * 101);
var choice = window.prompt("Select 'Heads' or 'Tails':");
var result="";

window.console.log("************************Coin Flip************************");
window.console.log(coinFlip);

// // Part 1-7
// //Check the Result
// if(coinFlip>=47){
//     result="Heads";
// }
// else{
//     result="Tails";
// }

// if(result == "Heads" && choice == "Heads") {
//     window.document.write("The flip was heads and you chose heads...you win!");
// }

// else if(result == "Heads" && choice == "Tails") {
//     window.document.write("The flip was heads but you chose tails...you lose!");
// }

// else if(result == "Tails" && choice == "Heads") {
//     window.document.write("The flip was tails but you chose heads...you lose!");
// }

// else if(result == "Tails" && choice == "Tails") {
//     window.document.write("The flip was tails and you chose tails...you win!");
// }

//Part 8
//Check the Result
if(coinFlip>=47){
    result=true;
}
else{
    result=false;
}

if(result && choice == "Heads") {
    window.document.write("The flip was heads and you chose heads...you win!");
}

else if(result && choice == "Tails") {
    window.document.write("The flip was heads but you chose tails...you lose!");
}

else if(!result && choice == "Heads") {
    window.document.write("The flip was tails but you chose heads...you lose!");
}

else if(!result && choice == "Tails") {
    window.document.write("The flip was tails and you chose tails...you win!");
}


