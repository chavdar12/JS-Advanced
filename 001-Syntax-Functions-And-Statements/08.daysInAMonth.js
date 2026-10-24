function daysInAMonth(month, year) {
    // Day 0 of the next month is the last day of this one.
    console.log(new Date(year, month, 0).getDate());
}

module.exports = daysInAMonth;
