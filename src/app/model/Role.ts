import {User} from './User';

export class Role {

    constructor(
        public id: number,
        public name: string,
        public users?: User[]
    ) {}
}
