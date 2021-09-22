//Closing Over Variables
// for (var i = 1; i <= 3; i++) {
//     setTimeout(function () {
//         console.log(`i: ${i}`);
//     }, i * 1000)
// }

// function fakeloop () {

//     for (let i = 1; i <= 3; i++) {
//         setTimeout(function () {
//             console.log(`i: ${i}`);
//         }, i * 1000)
//     }

// }
// fakeloop()

//✅ Module Pattern(IIFE)
// Factory Function
var workshop = (function Module (teacher) {
    var publicAPI = { ask, };
    return publicAPI;

    // ****************

    function ask (question) {
        console.log(teacher, question)
    }
})("Kyle");

workshop.ask("It's a module, right?");
// Kyle It's a module, right?

//✅ ES6 Modules & Node.js
var teacher = "Kyle";

export default function ask (question) {
    console.log(teacher, question)
}
