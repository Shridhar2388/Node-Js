const EventEmitter=require('events'); // this returns object

const userObj=new EventEmitter();

//creating event on addition/deletion of user

userObj.addListener('userCreated',()=>{
    console.log('User created event handled')
});

userObj.addListener('userDeleted',()=>{
    console.log('User deleted event handled')
});

// to create or generate event
userObj.emit('userCreated');
userObj.emit('userCreated');
userObj.emit('userDeleted');