import { IHashtable } from "./ihashtable";

export class Hashtable implements IHashtable{
    private data:any={};
    public exists(key:string):boolean{
        return !!this.data[key];
    }
    public get(key:string):any{
        if(!this.exists(key)){return null;}
        return this.data[key];
    }
    public set(key:string, item: any):void{
        this.data[key]=item;
    }
}