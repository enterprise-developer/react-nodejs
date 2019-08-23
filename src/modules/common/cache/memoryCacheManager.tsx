import { ICacheManager } from "./icacheManager";
import {IHashtable} from "../models/collection/ihashtable";
import {Hashtable} from "../models/collection/hashtable";

export class MemoryCacheManager implements ICacheManager{
    private data:IHashtable;
    constructor(){
        this.data=new Hashtable();
    }
    public get<TEntity>(key:string):TEntity{
        return this.data.get(key) as TEntity;
    }

    public set(key:string, item: any):void{
        this.data.set(key, item);
    }
}