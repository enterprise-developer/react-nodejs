export interface IConnector{
    get(uri:string):Promise<any>;
}