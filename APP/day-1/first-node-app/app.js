const { User } = require('./user');

const UserWithEvents = require('./user-event-emitter');

let user=new UserWithEvents();

let obj_constr = new User('Bharath', 'Bharath.hanumantharaju@socgen.com');
obj_constr.showUser();

obj_constr = new User('Harsh', 'harsha.shastri@socgen.com');
obj_constr.showUser();

obj_constr = new User('Anant', 'Anant.bulbule@socgen.com');
obj_constr.showUser();

user.create('shridhar');
user.create('shridhar');
user.delete(1);


user.addListener('userCreated',()=>{
    console.log('User created event handled');
});

user.addListener('userDeleted',()=>{
    console.log('User deleted event handled');
});

