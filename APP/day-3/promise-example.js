const { users, posts } = require('./data');

const getUser = (username) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            const user = users.find(usr => usr.name === username);
            if (!user) {
                rejected('User not found');
                return;
            }
            resolve(user);
        }, 2000);
    });
}

const getPosts = (userId) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            const userPosts = posts.filter(post => post.userId === parseInt(userId));
            if (!userPosts) {
                rejected('User not found');
                return;
            }
            resolve(userPosts);
        }, 2000);
    });
}

getUser('Shridhar')
    .then((user) => {
        console.log(user);
        return getPosts(user.id);
    })
    .then((posts) => {
        console.log('posts for users:', posts);
    })
    .catch((error) => {
        console.log('Error', error);
    });

getUser('Vamshi')
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log('Error: ', error);
    });
// console.log(getUser('Shridhar'));

// console.log(getUser('Bharath'));