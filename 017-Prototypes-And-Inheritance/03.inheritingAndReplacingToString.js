function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (${this.details().join(', ')})`;
        }

        details() {
            return [`name: ${this.name}`, `email: ${this.email}`];
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        details() {
            return [...super.details(), `subject: ${this.subject}`];
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        details() {
            return [...super.details(), `course: ${this.course}`];
        }
    }

    return { Person, Teacher, Student };
}

module.exports = toStringExtension;
