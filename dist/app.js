"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_class_1 = require("./controller/user/user.class");
var server_config_1 = require("./config/server.config");
var e = new user_class_1.user('mahdi', 'imani');
e.showName();
console.log("server run on port " + server_config_1.config.port);
