function largestNum(num1, num2, num3) {
    let result = 0;

    if (num1 > num2 && num1 > num3) {
        result = num1;
    } else if (num2 > num1 && num2 > num3) {
        result = num2;
    } else if (num3 > num1 && num3 > num1) {
        result = num3;
    }

    console.log(`The largest number is ${result}.`);
}

largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);