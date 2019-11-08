let name = "Shridhar";
let email = "shridhar2388@gmail.com";

function showUser() {
    console.log('showUser() invoked..');
    console.log('Name:', name);
    console.log('Email:', email);
}

class User {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }
    showUser() {
        console.log('showUser() invoked..');
        console.log('Name:', this.name);
        console.log('Email:', this.email);
    }
}

module.exports = {
    name,
    email,
    showUser,
    User
};