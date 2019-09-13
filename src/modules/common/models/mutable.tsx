import { IMutable } from "../enum";

export class Mutable implements IMutable{
    public value:any;
    public onChanged(val: any):void{
        this.value=val;
    }
}