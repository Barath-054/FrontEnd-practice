class Tester extends Employee() {
    constructor(name, age, id, salary) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.salary = salary;
    }
    skills() {
        console.log(this.name + " Hands on Core Java, Selenium and testing tools");
    }

    details() {
        console.log(this.name + " is a Junior Test Engineer");
    }
}