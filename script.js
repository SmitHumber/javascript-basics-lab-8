
let student = {
    name: "Smit",
    age: 22,
    enrolled: true,
    course: ["CPAN 113", "CPAN 113", "CPAN 111"],
    studentInfo: function() {
        console.log("My name is " + this.name, "I am " + this.age, "This is my classes ", this.course);
    }
}

console.log(student.name);
console.log(student.age);


student.studentInfo();

let number = {
    num1: [85, 92],
    num2: [78, 90]
}

let {num1, num2} = number;

console.log(num1);
console.log(num2);