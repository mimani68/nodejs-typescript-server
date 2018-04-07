export interface Ilogin {
    username: string,
    password: string,
    date: DataView,
}

export class login {
    public username: string;
    public password: string;
    public date: DataView;

    constructor(e: Ilogin) {
        this.username = e.username;
        this.password = e.password;
        this.date = e.date;
    }
}