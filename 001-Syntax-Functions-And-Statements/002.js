function stringLength(param1, param2, param3) {
    let sumOfLength = param1.length + param2.length + param3.length;
    let avgLength = sumOfLength / 3;

    console.log(Math.floor(sumOfLength));
    console.log(Math.floor(avgLength));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
