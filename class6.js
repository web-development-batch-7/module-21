function evenAdd(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        if (number % 2 == 0) {
            sum = sum + number
        }
    }
    return sum;
}

var arr = [5, 25, 30, 40, 55, 67];
var result = evenAdd(arr);
console.log(result);