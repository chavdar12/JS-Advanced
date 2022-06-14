function squareOfStars(arg) {

    let size = arg;

    if (typeof arg == "undefined") {
        size = 5;
    }

    for (let i = 1; i <= size; i++) {
        console.log('*' + ' *'.repeat(size - 1))
    }
}

squareOfStars(10);
