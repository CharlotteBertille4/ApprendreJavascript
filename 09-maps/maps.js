console.log('maps');

function doubleAll(numbers) {
    //var result = []
    // for (var i = 0; i < numbers.length; i++) {
    //     result.push(numbers[i] * 2)
    // }

    //return result
    return numbers.map(charlotte => charlotte * 2);
}

let result1 = doubleAll([10, 3, 40]);
console.log(result1);