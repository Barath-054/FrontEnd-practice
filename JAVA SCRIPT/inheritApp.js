class Developer extends Employee() {

    constructor(name, age, id, salary) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.salary = salary;
    }
    skills() {
        console.log(this.name + " Hands on Core Java, HTML, CSS, JS");
    }

    details() {
        console.log(this.name + " is a Junior Developer");
    }
}