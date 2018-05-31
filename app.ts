import { user } from './controller/user/user.class';
import { config } from './config/server.config';

/*
 *
 * read and write file from computer
 * 1) npm init
 * 2) load built-in module like fs
 * 3) enjoy
 * 
 */
// import * as fs from 'fs';

let e = new user('user one', 'last name goes here');
e.showName();

// better to use environment variable like process.env.url
console.log(`server run on port ${ config.port }`);
