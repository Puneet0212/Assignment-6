var coinFlip = Math.floor(Math.random() * 101);
var choice = window.prompt("Select 'Heads' or 'Tails':");
var result="";

window.console.log("************************Coin Flip************************");
window.console.log(coinFlip);
//Check the Result
if(coinFlip>=47){
    result="Heads";
}
else{
    result="Tails";
}

if(result=="Heads"){
    if(choice==="Heads"){
        window.alert("The flip was heads and you chose heads...you win");
    }
    else if(choice==="Tails"){
        window.alert("The flip was heads but you chose tails...you lose!");
    }
}
else if(result=="Tails"){
    if(choice==="Heads"){
        window.alert("The flip was tails but you chose heads...you lose!");
    }
    else if(choice==="Tails"){
        window.alert("The flip was tails and you chose tails...you win!");
    }
    else{
        window.alert("Invalid choice");
    }
}


