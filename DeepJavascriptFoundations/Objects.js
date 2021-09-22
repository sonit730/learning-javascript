// 🔔 Implicit & Explicit Binding
// ✅ this: implicit binding
// var workshop = {
//     teacher: "Kyle",
//     ask (question) {
//         console.log(this.teacher, question);
//     },
// };

// workshop.ask("What is implicit binding?")
//Kyle What is implicit binding?

// // ✅ this: dynamic binding -> sharing
// function ask (question) {
//     console.log(this.teacher, question);
// }

// var workshop1 = {
//     teacher: "Kyle",
//     ask: ask,
// }

// var workshop2 = {
//     teacher: "Suzy",
//     ask: ask,
// }

// workshop1.ask("How do I share a method ?");
// // Kyle How do I share a method ?

// // ✅ this: explicit binding
// function ask (question) {
//     console.log(this.teacher, question);
// }

// var workshop1 = {
//     teacher: "Kyle",
// }

// var workshop2 = {
//     teacher: "Suzy",
// }

// ask.call(workshop1, 'Can I  explicitly set context ?');
// // Kyle Can I explicity set context ?

// ask.call(workshop2, 'Can I  explicitly set context ?');
// // Suzy Can I explicity set context ?

// // ✅ this: hard binding
// var workshop = {
//     teacher: "Kyle",
//     ask (question) {
//         console.log(this.teacher, question);
//     }
// }

// setTimeout(workshop.ask, 10, "Lost this")
// //undefinded Lost this?

// setTimeout(workshop.ask.bind(workshop), 3000, "Hard bound this ?");
// // Kyle Hard bound this ?

//🔔Binding Precedence
// var workshop = {
//     teacher: "Kyle",
//     ask: function Ask (question) {
//         console.log(this.teacher, question);
//     },
// };

// const a = new workshop.ask('hello')
// new (workshop.ask.bind(workshop))("What does this do ?");

//🔔 Arrow Function & Lexical this
// var workshop = {
//     teacher: "Kyle",
//     ask (question) {
//         setTimeout(() => {
//             console.log('this in setTimeout:', this)
//             console.log(this.teacher, question)
//         }, 1000)

//         setTimeout(function () {
//             console.log(this.teacher, question)
//         }, 1000) // lost this
//     },

// };

// workshop.ask("is a teacher ")
//Kyle is a teacher

//🔔 Resolving this in Arrow Functions
// var workshop = {
//     teacher: "Kyle",
//     ask2: (question) => {
//         console.log(this.teacher, question)
//     }
// }

// workshop.ask2("is a teacher")
// undefined is a teacher

//🔔 ES6 class Keyword
// class Workshop {
//     constructor(teacher) {
//         this.teacher = teacher;
//     }
//     ask (question) {
//         console.log(this.teacher, question)
//     }
// }

// var deepJS = new Workshop("Kyle");
// var reactJS = new Workshop("Suzy")

// deepJS.ask("Is 'class a class?")
// //Kyle Is 'class a class?

// reactJS.ask("Is this class OK?")
// //Suzy Is this class OK?

//✅ extends(inheritance)
// class Workshop {
//     constructor(teacher) {
//         this.teacher = teacher;
//     }
//     ask (question) {
//         console.log(this.teacher, question)
//     }
// }

// class AnotherWorkshop extends Workshop {
//     speakUp (msg) {
//         console.log('this', this)
//         this.ask(msg)
//     }
// }

// var JSRecentParts = new AnotherWorkshop("Kyle")
// JSRecentParts.speakUp("Are classes getting better?")
// // Kyle Are classes getting better?

//✅ES6 class: super (relative polymorphism)
// class Workshop {
//     constructor(teacher) {
//         this.teacher = teacher;
//     }
//     ask (question) {
//         console.log(this.teacher, question)
//     }
// }

// class AnotherWorkshop extends Workshop {
//     ask (msg) {

//         super.ask(msg.toUpperCase())
//     }
// }

// var JSRecentParts = new AnotherWorkshop("Kyle")
// JSRecentParts.ask("Are classes getting better?")
// // Kyle Are classes getting better?

//✅ ES6 class: still dynamic this
// class Workshop {
//     constructor(teacher) {
//         this.teacher = teacher;
//     }
//     ask (question) {
//         console.log(this.teacher, question)
//     }
// }

// var deepJS = new Workshop("Kyle")

// setTimeout(deepJS.ask, 100, "Still losing 'this'")
//undefined "Still losing 'this'"


//✅  👇🏼👇🏼 fixing this
// class Workshop {
//     constructor(teacher) {
//         this.teacher = teacher;
//         this.ask = question => {
//             console.log(this.teacher, question)
//         }
//         // this.ask = function (question) {
//         //     console.log(this.teacher, question)
//         // }//lost this
//     }
// }

// var deepJS = new Workshop("Kyle")

// setTimeout(deepJS.ask, 1000, "Is 'this' fixed?")
// //Kyle Is 'this' fixed?

//✅ ES6 class: hacktastrophy
var method = (function defineMethod () {
    var instances = new WeakMap();

    return function method (obj, methodName, fn) {
        Object.defineProperty(obj, methodName, {
            get () {
                if (!instances.has(this)) {
                    instances.set(this, {});
                }
                var methods = instances.get(this);
                if (!(methodName in methods)) {
                    methods[methodName] = fn.bind(this);
                }
                return methods[methodName];
            }
        });
    }
})();

function bindMethods (obj) {
    for (let ownProp of Object.getOwnPropertyNames(obj)) {
        if (typeof obj[ownProp] == "function") {
            method(obj, ownProp, obj[ownProp]);
        }
    }
}

class Workshop {
    constructor(teacher) {
        this.teacher = teacher;
        // this.ask = (question) => {
        //     console.log(this.teacher, question)
        // }
    }
    ask (question) {
        console.log(this.teacher, question)
    }
}
// var a = new Workshop("Dog:")
// setTimeout(a.ask, 1000, 'Gau Gau')

class AnotherWorkshop extends Workshop {
    speakUp (msg) {
        this.ask(msg)
    }
}

var JSRecentParts = new AnotherWorkshop("Meo:")
JSRecentParts.speakUp("Hello")
// bindMethods(Workshop.prototype);
bindMethods(AnotherWorkshop.prototype)
setTimeout(JSRecentParts.speakUp, 1000, 'Meo Meo')

