var coinFlip, result="";

for(var i=1; i<=10; i++){
    coinFlip=Math.round(Math.random());
    if(coinFlip==0){
        result += "Heads\n";
    }
    else{
        result += "Tails\n";
    }
}

window.console.log(result);