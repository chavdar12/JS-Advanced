function jansNotation(instructions) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };
    const stack = [];
    for (const instruction of instructions) {
        if (typeof instruction === 'number') {
            stack.push(instruction);
            continue;
        }
        if (stack.length < 2) {
            console.log('Error: not enough operands!');
            return;
        }
        const b = stack.pop();
        const a = stack.pop();
        stack.push(operations[instruction](a, b));
    }
    console.log(stack.length === 1 ? stack[0] : 'Error: too many operands!');
}

module.exports = jansNotation;
