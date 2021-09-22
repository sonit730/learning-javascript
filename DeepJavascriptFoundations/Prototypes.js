//🔔 Dunder Prototypes
// function Workshop (teacher) {
//     this.teacher = teacher;
// }

// Workshop.prototype.ask = function (question) {
//     console.log(this.teacher, question);
// };

// var deepJS = new Workshop("kyle")
// deepJS.ask = function (question) {
//     this.__proto__.ask.call(this, question.toUpperCase())
// }

// deepJS.ask("Is this fake polymorphism?")

// console.log('%cdeepJS.constructor === Workshop:', 'color:green')
// console.log(deepJS.constructor === Workshop)

// console.log('%cdeepJS.__proto__:', 'color:red')
// console.log(deepJS.__proto__)

// console.log('%cWorkshop.prototype:', 'color:brown')
// console.log(Workshop.prototype)

// console.log('%cObject.getPrototypeOf(deepJS)', 'color:purple')
// console.log(Object.getPrototypeOf(deepJS))

//🔔 Prototypal Inheritance
//✅ Prototypes:objects linked (2 function kế thừa)
function Workshop (teacher) {
    this.teacher = teacher
}

Workshop.prototype.ask = function (question) {
    console.log(this.teacher, question)
}

function AnotherWorkshop (teacher) {
    Workshop.call(this, teacher)
}

AnotherWorkshop.prototype = Object.create(Workshop.prototype)
// AnotherWorkshop.prototype.constructor = AnotherWorkshop // Thay đổi constructor
AnotherWorkshop.prototype.speakUp = function (msg) {
    this.ask(msg.toUpperCase())
}

const JSRecentParts = new AnotherWorkshop("Kyle")
// console.log(JSRecentParts)
// JSRecentParts.speakUp('is the actually inheritance')
// Kyle IS THE ACTUALLY INHERITANCE


// const userFunctionStore = {
//     increment: function () {
//         this.score++;
//     },
//     login: function () { console.log('Logged in'); }
// }
// function Person (firstName) {
//     this.firstName = firstName
// }
// const son = new Person('Son')
// const newUser = Object.create(userFunctionStore)

// console.log(son.__proto__)
// console.log(userFunctionStore.__proto__)
// console.log(newUser.__proto__)

//💥 kế thừa cho class : cú pháp ngắn ngọn hơn
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    get fullName () {
        return this.firstName + ' ' + this.lastName
    }
    set fullName (fullName) {
        let nameParts = fullName.split(' ')
        this.firstName = nameParts[0];
        this.lastName = nameParts[1]
    }
    isAdult () {
        return this.age >= 18
    }
}

class Student extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age)
        this._enrolledCourses = [];
    }

    enroll (courseId) {
        this._enrolledCourses.push(courseId)
    }

    getCourse (courseId) {
        return this.fullName + "'s enrolled courses are: " + this._enrolledCourses.join(', ')
    }
}

let jim = new Student('Jim', 'Cooper', 29)
console.log(jim.isAdult())
console.log(jim)

