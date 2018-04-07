"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var user_class_1 = require("./user.class");
var userPermission = (function (_super) {
    __extends(userPermission, _super);
    function userPermission(name, family) {
        return _super.call(this, name, family) || this;
    }
    userPermission.prototype.assignPermission = function (role) {
        if (role === void 0) { role = 'guest'; }
        this.user.role = role;
    };
    return userPermission;
}(user_class_1.user));
exports.userPermission = userPermission;
