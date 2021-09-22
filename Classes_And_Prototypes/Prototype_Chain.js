/* ========✅ Ví dụ 1 ======== */
function userCreator (name, score) {
    const newUser = Object.create(userFunctionStore) // Định nghĩa prototype của object newUser
    newUser.name = name;
    newUser.score = score;
    return newUser
}

const userFunctionStore = {
    increment: function () {
        this.score++;
    },
    login: function () { console.log('Logged in'); }
}

// const user1 = userCreator('Will', 3);
// const user2 = userCreator("Tim", 5);

// user1.increment();
// console.log(user1)
/* ========✅ End Ví dụ 1 ======== */

/* ========✅ Ví dụ 2 ======== */
function userCreator2 (name, score) {
    this.name = name;
    this.score = score;
}
userCreator2.prototype.increment2 = function () { this.score++ };
userCreator2.prototype.login2 = function () { console.log('Login') };

const user3 = new userCreator2('Kiva', 9);
user3.increment2()
console.log('user3:', user3)
/* ========✅ End Ví dụ 2 ======== */


/* ========✅ Ví dụ 3 ======== */
class userCreator3 {
    constructor(name, score) {
        this.name = name
        this.score = score
    }
    increment () {
        this.score++
    }
    login () {
        console.log('Login')
    }
}
/* ========✅ End Ví dụ 3 ======== */
