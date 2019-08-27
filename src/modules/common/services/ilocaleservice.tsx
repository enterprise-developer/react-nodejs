import { Promise } from "../models/promise";

export interface ILocaleservice{
    getLocale(uri:string):Promise<any>;
}