var po = console.log;

for (var i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        po('FizzBuzz');
    } else if(i % 3 === 0) {
        po('Fizz');
    } else if(i % 5 === 0) {
        po('Buzz');
    } else {
        po(i);
    }
}