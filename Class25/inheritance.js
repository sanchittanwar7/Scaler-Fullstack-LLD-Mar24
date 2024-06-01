// Parent/Base class: Class FROM which other classes are inheriting : Person
// Derived class: Class which is inheriting from parent/base class : Student and Teacher
// super constructor: constructor of the parent/base class

class Person {
    constructor(_name, _age, _gender) {
        this.name = _name;
        this.age = _age;
        this.gender = _gender
    }

    sayHello() {
        console.log(`${this.name} says hello`)
    }
}

// const person1 = new Person("Sanchit", 26, "male")
// console.log(person1)

class Student extends Person {
    static studentCount = 0
    #aadharNumber;
    constructor(_name, _age, _gender, _rollNumber, _class, _aadharNumber) {
        super(_name, _age, _gender)
        this.rollNumber = _rollNumber
        this.class = _class
        this.#aadharNumber = _aadharNumber
        Student.studentCount++;
    }
    showMaskedAadhar() {
        const maskedAadhar = this.#aadharNumber.substring(3)
        return `***${maskedAadhar}`
    }
    static totalStudents() {
        console.log(`Total students: ${Student.studentCount}`)
    }
}

class EngineeringStudent extends Student {
    constructor(_name, _age, _gender, _rollNumber, _class, _package){
        super(_name, _age, _gender, _rollNumber, _class)
        this.package = _package;
    }
}

const student1 = new Student("Sanchit", 26, "male", 7, "LLD Full stack", "fasdfdas")
// Student.totalStudents()
// console.log(Student.totalStudents)
const student2 = new Student("Shynu", 26, "male", 7, "LLD Full stack", "fgdfjgh")
// Student.totalStudents()
console.log(student1.showMaskedAadhar())

class Teacher extends Person {
    constructor(_name, _age, _gender, _batchName, _batchRating) {
        super(_name, _age)
        this.batchName = _batchName;
        this.batchRating = _batchRating
    }
}

// const teacher1 = new Teacher("Sanchit", 26, "male", "LLD FUll stack", "4")
// console.log(teacher1)
// teacher1.sayHello()