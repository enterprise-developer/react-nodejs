import { Promise } from "@app/common";

export interface IUserService{
    getUsers():Promise<any>;
}