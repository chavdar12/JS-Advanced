function evenPosition(stringArr) {

    let result = [];

    for (let i = 0; i < stringArr.length; i += 2) {
        result[result.length] = stringArr[i];

    }

    console.log(result.join(' '));
}

evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);
