function sum(num1, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);

    let result = 0;

    for (let i = number1; i <= number2; i++) {
        result += i;
    }

    console.log(result);
}

sum('1', '5');
sum('-8', '20');