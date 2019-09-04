import {Promise} from "../models/promise";
import { ILayout } from "./ILayout";
export interface IApplication{
    rendering():void;
    rendered():void;
    setLayout(layout:ILayout):void;
    render(targetSelector:string):Promise<any>;
}