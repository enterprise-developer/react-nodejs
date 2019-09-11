export interface IUser{
    id:string;
    firstName:string;
    lastName:string;
    userName:string;
}
export interface IUserViewModel{
    items:Array<IUser>;
}
export class UserViewModel implements IUserViewModel{
    public items: Array<IUser>;
    constructor() {
        this.items=[];
    }
}