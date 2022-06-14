function daysOfMonths(month, year) {
    console.log(new Date(0, month-1, year).getDate());
}

daysOfMonths(1, 2012);
daysOfMonths(2, 2021);