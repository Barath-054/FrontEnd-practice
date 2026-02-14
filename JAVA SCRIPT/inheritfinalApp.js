const dev = new Developer("Ragul", 20, 123, 30000);
console.log(`Name: ${dev.name}, Age: ${dev.age}, ID: ${dev.id}, Salary: ${dev.salary}`);
dev.skills();
dev.details();

const t = new Tester("Kividass", 20, 124, 35000);
console.log(`Name: ${t.name}, Age: ${t.age}, ID: ${t.id}, Salary: ${t.salary}`);
t.skills();
t.details();