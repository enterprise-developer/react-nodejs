import { BaseIoCBuilder } from "./baseIoCBuilder";
export class SingletonIoCBuilder extends BaseIoCBuilder{
    public getInstance():any{
        if(!this.item["__instance"]){
            this.item["__instance"]=new this.item.instanceOf();
        }
        return this.item["__instance"];
    }
}