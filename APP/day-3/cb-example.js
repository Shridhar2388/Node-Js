
const { users } = require('./data');

const getUser = (username, cb) => {
    setTimeout(() => {
        const user = users.find(usr => usr.name === username);   
        if(!user)        {
            cb('User not found');
            return;
        }
        cb(user);
    }, 2000);
}

getUser('Shridhar', (err,user) => {
    if(err){
        console.log('Error',err);
        return;
    }
    console.log(user);
});

getUser('Vamshi', (err,user) => {
    if(err){
        console.log('Error',err);
        return;
    }
    console.log(user);
});

// console.log(getUser('Shridhar'));

// console.log(getUser('Bharath'));