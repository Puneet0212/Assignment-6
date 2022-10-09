var coinFlip, result="", isTails=false;

do{
    coinFlip=Math.round(Math.random());
    if(coinFlip==0){
        result += "Heads\n";
    }
    else{
        result += "Tails\n";
        isTails=true;
    }
}while(isTails==false)

window.console.log(result);