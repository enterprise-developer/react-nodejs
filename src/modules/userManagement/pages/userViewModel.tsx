import { IUser } from "../_share/enum";

export interface IUserViewModel{
    items:Array<IUser>;
}
export class UserViewModel implements IUserViewModel{
    public items: Array<IUser>;
    constructor() {
        this.items=[];
    }
}