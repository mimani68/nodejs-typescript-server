import { IUser } from './user.interface';

// comment goes here

export class user{

    public user: IUser ;

    constructor( name: string, family: string ) {
        this.user = { name: name, family: family };
    }

    showName(): string {
        if ( this.user ) {
            console.log('show name ', this.user.name);
            return this.user.name;
        } else {
            console.log('no user found');
            return 'no user found';
        }
    }

}
