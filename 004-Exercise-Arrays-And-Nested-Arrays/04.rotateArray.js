function rotateArray(arr, rotations) {
    const shift = rotations % arr.length;
    console.log([...arr.slice(-shift), ...arr.slice(0, -shift)].join(' '));
}

module.exports = rotateArray;
