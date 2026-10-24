class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        const values = [name, salary, position, department];
        if (values.some((v) => v === '' || v === undefined || v === null) || salary < 0) {
            throw new Error('Invalid input!');
        }
        if (!this.departments[department]) this.departments[department] = [];
        this.departments[department].push({ name, salary: Number(salary), position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const average = (employees) => employees.reduce((s, e) => s + e.salary, 0) / employees.length;
        const [name, employees] = Object.entries(this.departments)
            .reduce((best, cur) => (average(cur[1]) > average(best[1]) ? cur : best));

        const lines = [...employees]
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .map((e) => `${e.name} ${e.salary} ${e.position}`);
        return [`Best Department is: ${name}`, `Average salary: ${average(employees).toFixed(2)}`, ...lines].join('\n');
    }
}

module.exports = Company;
