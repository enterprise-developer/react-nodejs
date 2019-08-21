import {Promise} from "../models/promise";
import { ILayout } from "./ILayout";
export interface IApplication{
    setLayout(layout:ILayout):void;
    render(targetSelector:string):Promise<any>;
}