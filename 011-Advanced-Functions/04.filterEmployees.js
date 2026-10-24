function filterEmployees(data, criteria) {
    const [key, value] = criteria.split('-');
    JSON.parse(data)
        .filter((e) => criteria === 'all' || e[key] === value)
        .forEach((e, i) => console.log(`${i}. ${e.first_name} ${e.last_name} - ${e.email}`));
}

module.exports = filterEmployees;
