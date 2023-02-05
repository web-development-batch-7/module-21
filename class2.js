// var inche = 144;

// var feet = inche / 12;
// console.log(feet);

function feet(inche) {
    result = inche / 12;
    return result;
}

var dadaFeet = feet(245);
var dadiFeet = feet(144);
console.log("Dada", dadaFeet.toFixed());
console.log("Dadi", dadiFeet);