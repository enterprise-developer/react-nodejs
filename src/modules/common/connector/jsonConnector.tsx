import { IConnector } from "./iconnector";

export class JsonConnector implements IConnector{
    public get(uri:string):Promise<any>{
    }
}