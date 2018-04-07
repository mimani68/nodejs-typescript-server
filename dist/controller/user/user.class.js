"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = (function () {
    function user(name, family) {
        this.user = { name: name, family: family };
    }
    user.prototype.showName = function () {
        if (this.user) {
            console.log('show name ', this.user.name);
            return this.user.name;
        }
        else {
            console.log('no user found');
            return 'no user found';
        }
    };
    return user;
}());
exports.user = user;
