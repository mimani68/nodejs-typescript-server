import { user } from "./controller/user/user.class";
import { config } from "./config/server.config";

/*
 *
 * read and write file from computer
 * 1) npm init
 * 2) load built-in module like fs
 * 3) enjoy
 * 
 */
// import * as fs from 'fs';

let e = new user('mahdi', 'imani');
e.showName();
console.log(`server run on port ${ config.port }`);
