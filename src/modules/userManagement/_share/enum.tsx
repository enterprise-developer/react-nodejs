export enum LocalIoCNames{
    IUserService="UserManagement.IUserService"
}

export enum Const{
    API_ENDPOINT="USER_MANAGEMENT.API_ENDPOINT"
}

export interface IUser{
    id:string;
    firstName:string;
    lastName:string;
    userName:string;
}