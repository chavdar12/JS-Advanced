function solve(number, op1, op2, op3, op4, op5) {

    let num = Number(number);

    let arr = [op1, op2, op3, op4, op5];

    for (let op of arr) {

        switch (op) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num -= (num * 20) / 100;
                break;
        }

        console.log(num);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');