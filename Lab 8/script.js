// Understanding and Creating Objects

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

// Using Destructuring Assignment

student.studentInfo();

let number = {
    num1: [85, 92],
    num2: [78, 90]
}

let {num1, num2} = number;

console.log(num1);
console.log(num2);

// The Spread Operator

let studentCourse1 = {a: "CPAN 133"};
let studentCourse2 = {b: "CPAN 113"};

let graduationYear = { ...studentCourse1, ...studentCourse2};

console.log(graduationYear);

// Object Methods

let student2 = {
    name: "Smit",
    age: 22,
    enrolled: true,
    course: ["CPAN 113", "CPAN 113", "CPAN 111"],
    studentInfo: function() {
        console.log("My name is " + this.name, "I am " + this.age, "This is my classes ", this.course);
    },
    studnetGrad: function() {
        this.age += 5;
        console.log(`2030 when I gradurated I will be ${this.age}`);
    }
};

student2.studnetGrad();