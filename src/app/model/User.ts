import {Role} from './Role';

export class User {

    constructor(
        public id: number,
        public username: string,
        public roles: Role[],
        public newPassword?: string
    ) {}
}
