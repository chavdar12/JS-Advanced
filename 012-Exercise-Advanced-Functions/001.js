function solve(array, argument) {

    if (argument === 'asc') {
        array = array.sort((a, b) => a - b);
    } else if (argument === 'desc') {
        array = array.sort((a, b) => b - a);
    }

    return array;
}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');
