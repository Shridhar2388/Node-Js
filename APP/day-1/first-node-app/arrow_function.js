var obj = {
    greeting: 'Good Morning!!',

    greet: function (name) {
        //console.log(name +' ' + this.greeting);
        setTimeout(function () {
            console.log(name + ' ' + this.greeting);
        }.bind(this), 0);
    }
}

obj.greet('shridhar');

var obj_arrow = {
    greeting: 'Good Morning!!',

    greet: function (name) {
        //console.log(name +' ' + this.greeting);
        setTimeout(() => { // using arrow function solves the issue of this and puts the scope to obj object rather than window(in case of browser) global in case of Node
            console.log(name + ' ' + this.greeting);
        }, 0);
    }
}

obj_arrow.greet('shridhar kulkarni');