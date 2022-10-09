window.console.log("************************Looping A Triangle************************");

var pattern = "";

for(var i=1; i<=7; i++){
    for(var j=1; j<=i; j++){
        pattern += "#"
    }
        pattern += "\n";
}

window.console.log(pattern);