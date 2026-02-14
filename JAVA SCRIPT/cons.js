 class Std {
    sname;
    sage;
    sno;

    constructor(sname, sage, sno) {
    this.sname = sname;
    this.sage = sage;
    this.sno = sno;
    }

    play() {
        console.log("I am intrested to play");
    } 

    work() {
        console.log("I like to complete my work");
    }
 };

 const s = new Std("Barath", 21, 123);
console.log(s.sname);
console.log(s.sno);
console.log(s.sage);
s.play();
s.work();

