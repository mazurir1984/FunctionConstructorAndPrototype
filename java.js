'use strict'

const userProto = {
    getFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    },

    logout: function(userLogout) {
        if(this.isLoggedIn === userLogout) {
            return true;
        } else {
            return false;
        };
    },

    login: function(loginUser) {
        if(loginUser === this.isLoggedIn) {
            return true;
        } else {
            return false;
        }
    },
};


function User(firstName, lastName, email, age, isLoggedIn) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.isLoggedIn = isLoggedIn;
};

const user1 = new User('Iryna', 'Mazur', 'mazurir@ukr.net', '18', 'abcd');

User.prototype = userProto;

