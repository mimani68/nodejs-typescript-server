import { user } from "./user.class";

export class userPermission extends user {

    constructor( name: string, family: string ) {
        super(name, family);
    }

    assignPermission( role='guest' ) {
        this.user.role = role;
    }
}
