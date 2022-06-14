function solution() {
    class Employee {
        #iterator;

        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.#iterator = 0;
            this.tasks = [];
        }

        work() {
            if (this.tasks.length === 0) {
                return;
            }

            let task = this.tasks[this.#iterator];
            this.#iterator++;

            if (this.#iterator === this.tasks.length) {
                this.#iterator = 0;
            }

            console.log(task);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} is working on a simple task.`);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} is working on a complicated task.`);
            this.tasks.push(`${this.name} is taking time off work.`);
            this.tasks.push(`${this.name} is supervising junior workers.`);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} scheduled a meeting.`);
            this.tasks.push(`${this.name} is preparing a quarterly report.`);
            this.dividend = 0;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}

const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const senior = new classes.Senior('Alex', 31);

senior.work();
senior.work();
senior.work();
senior.work();

senior.salary = 12050;
senior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
