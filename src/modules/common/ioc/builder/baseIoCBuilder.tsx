import { IIoCBuilder } from "../iiocBuilder";
import { IIoCRegistration } from "../iiocRegistration";

export class BaseIoCBuilder implements IIoCBuilder<any>{
    protected item: IIoCRegistration;
    public setRegistration(item: IIoCRegistration):void{
        this.item=item;
    }
    public getInstance():any{
        throw "not implemented method";
    }
}