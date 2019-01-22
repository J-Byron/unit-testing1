const fizzbuzz = function (number) {

    // If the number is divisible by 5, return "Buzz".
    // If the number is divisible by both 3 and 5, return "FizzBuzz".
    // Otherwise, just return the number that was passed into the function.

    if ((number % 3 === 0) && (number % 5 === 0)) {
        return 'fizzbuzz'
    } else if (number % 3 === 0) {
        return 'fizz'
    } else if (number % 5 === 0) {
        return 'buzz'
    }
    return number;
}

module.exports = fizzbuzz;