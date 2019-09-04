import { IApplication } from "./iapplication";
import { ILayout } from "./ILayout";
import { PromiseFactory, Promise } from "../models/promise";

export class BaseApplication implements IApplication{
    protected layout:ILayout;
    public setLayout(layout: ILayout):void{
        this.layout=layout;
    }
    public rendering():void{}
    public render(targetSelector: string):Promise<any>{
        return PromiseFactory.create<any>();
    }
    
    public rendered():void{}
}