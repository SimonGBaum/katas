const { evilFizzBuzz } = require('./evil_fizz_buzz.js');

// Test 01
test("If the series of numbers contains a multiple of 3 and 5, return 'FizzBuzz'", () => {
    expect(evilFizzBuzz(1, 15)).toEqual(1, 2, 3, 4, 5,
                                        6, 7, 8, 9, 10,
                                        11, 12, 13, 14, 15,
                                        16, 17, 18, 19, 20,
                                        21, 22, 23, 24, 25,
                                        26, 27, 28, 29, 'FizzBuzz');
});
