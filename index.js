const sum = +prompt('Pun the number');

function fib(n) {
    let x = 1;
    let z = 1;
    for (let i = 3; i <= n; i++ ) {
    let c = x + z;
        [x, z] = [z, c];
    }
    return z;
    
}

document.write( fib(10));
