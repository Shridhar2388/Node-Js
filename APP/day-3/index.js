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

const getUserAndPost=async(userName)=>{
    try{
        const user=await getUser(userName);
        const userPost=await getPosts(user.id);
        console.log('user:', user);
        console.log('posts for users:', userPost);
    }
    catch(e){
        console.log('Error:', e)
    }
}

getUserAndPost('Shridhar');