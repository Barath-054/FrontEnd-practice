// const emp = {
//     ename : "Ane",
//     eId : 123,
//     esalary : 40000,

//     work : function() {
//         console.log("Hello");
//     },
//     metting : function() {
//         console.log("Welcome");
//     }
// };

// console.log(emp.ename);
// console.log(emp.eId);
// console.log(emp.esalary);
// emp.work();
// emp.metting();

// const emp = {
//     eid : 10,
//     ename : "thiru",
//     eage : 21,

//     work : function() {
//         console.log("Employee Name ", this.ename)
//     }

// }

// emp.work()


class employee {
    ename = "Thiru"
    Eid = 103

    play() {
        console.log("Employee Name ", this.ename + " " + "Employee Id ", this.Eid)
    }
}

const emp1 = new employee();
emp1.play();