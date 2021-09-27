document
    .getElementById("login")
    .addEventListener("click", function () {
        sendRequest("Tommy")
    });

async function sendRequest (username) {
    try {
        let userResponse = await checkDbForUser(username)
        let postResponse = await checkDbForPosts(userResponse.userId)
        document.getElementById("greeting")
            .innerHTML = `Welcome back ${username}`;
        document.getElementById("posts")
            .innerHTML = `Here is your post: ${postResponse.posts[0].post}`;
    } catch (error) {
        document.getElementById("greeting")
            .innerHTML = "Sorry, we couldnt find the user";
    }
}
// checkDbForUser(username).then(function (response) {
//     return checkDbForPosts(response.userId)
// }).then(function (response) {
//     document.getElementById("greeting")
//         .innerHTML = `Welcome back ${username}`;
//     document.getElementById("posts")
//         .innerHTML = `Here is your post: ${response.posts[0].post}`;
// }).catch(function (error) {
//     document.getElementById("greeting")
//         .innerHTML = "Sorry, we couldnt find the user";
//     return;
// })


function checkDbForUser (username) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (username != 'Tommy') {
                reject({ error: true, userId: null })
            } else {
                resolve({ error: true, userId: 1 })
            }
        }, 100);
    })
}

function checkDbForPosts (userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ error: false, posts: [{ postId: 1, post: 'Post 1' }] })
            } else {
                reject({ error: true, posts: null })
            }
        }, 3000);
    })
}

