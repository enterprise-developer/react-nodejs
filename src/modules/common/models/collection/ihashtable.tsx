export interface IHashtable{
    exists(key:string):boolean;
    get(key:string):any;
    set(key:string, item: any):void;
}