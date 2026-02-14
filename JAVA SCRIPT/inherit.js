class Employee {
    constructor(name, age, id, salary) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.salary = salary;
    }

    skills() {
    }
    details() {
    }
}

class Developer extends Employee {

    constructor(name, age, id, salary) {
        super(name, age, id, salary);
        
    }
    skills() {
        console.log(this.name + " Hands on Core Java, HTML, CSS, JS");
    }

    details() {
        console.log(this.name + " is a Junior Developer");
    }
}

class Tester extends Employee {
    
    constructor(name, age, id, salary) {
        super(name, age, id, salary);
    }
    skills() {
        console.log(this.name + " Hands on Core Java, Selenium and testing tools");
    }

    details() {
        console.log(this.name + " is a Junior Test Engineer");
    }
}

const dev = new Developer("Ragul", 20, 123, 30000);
console.log(`Name: ${dev.name}, Age: ${dev.age}, ID: ${dev.id}, Salary: ${dev.salary}`);
dev.skills();
dev.details();

const t = new Tester("Kividass", 20, 124, 35000);
console.log(`Name: ${t.name}, Age: ${t.age}, ID: ${t.id}, Salary: ${t.salary}`);
t.skills();
t.details();