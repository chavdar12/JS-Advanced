function dayOfWeek(day) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const index = days.indexOf(day);
    console.log(index === -1 ? 'error' : index + 1);
}

module.exports = dayOfWeek;
