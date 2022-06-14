function solve(arr) {

    let sumElements = 0;
    let inverseSum = 0;

    for (let elem of arr) {
        sumElements += elem;
        inverseSum += 1 / elem;
    }

    console.log(sumElements);
    console.log(inverseSum);
    console.log(arr.join(''));
}

solve([1, 2, 3]);