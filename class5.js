
function add(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        sum = sum + number;
    }
    return sum;
}
var arr = [10, 25, 30, 40, 50, 60];
var result = add(arr);

console.log(result);
