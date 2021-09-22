//Borrow Method

// function Point (age) {
//     console.log('this ben ngoai', this)
//     this.age = age
//     this.getAge = function () {
//         console.log('this ben trong', this)

//         console.log(this.age)
//     }
//     // console.log(this.age)
// }
// const p = new Point(26)
// console.log(p.getAge())

//-----------------------
// let c
// function Person (firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     // return this
//     // console.log(`${this.firstName} + ${this.lastName}`)
// }

// Person.prototype.getFullName = function () {
//     return `${this.firstName} + ${this.lastName}`
// }

// Person('Son', 'Ho')
// const a = new Person('Ngoc', 'Tu')
// console.log(a)
//-----------------------

//-----------------------
// var blog = {
//     domain: "freetuts.net",
//     author: "Nguyễn Văn Cường",
//     showWebsite: function (callbackFunction) {
//         console.log('[showWebsite] this :  ', this)
//         callbackFunction();
//     },
//     render: function () {
//         console.log('[render] this:', this)
//         this.showWebsite(function () {
//             console.log(this); // là đối tượng window
//             console.log(this.domain); // nên thuộc tính domain không tồn tại
//             console.log(this.author); /// nên thuộc tính author không tồn tại
//         }.bind(food));
//     },

// };
// const food = {
//     domain: 'food.com',
//     author: 'Hồ Huỳnh Sơn'
// }
// blog.render();
//-----------------------

function Person () {
    console.log(this)
    return function () {
        console.log(this)
    }
}
const p = new Person()
p()