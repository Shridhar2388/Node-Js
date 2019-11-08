const EvenEmitter = require('events');

class UserWithEvents extends EvenEmitter {
    constructor() {
        super();
    }

    create(name) {
        this.emit('userCreated', { id: Date.now(), name: name.toUpperCase() });
    }

    delete(id) {
        this.emit('userDeleted', `User with User Id ${id} deleted`);
    }
}

module.exports = UserWithEvents;