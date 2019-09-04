import {render as reactRender} from "react-dom";
import {IApplication} from "./iapplication";
import {PromiseFactory, Promise} from "../models/promise";
import uiHelper from "../helpers/uiHelper";
import { BaseApplication } from "./baseApplication";
export class Application extends BaseApplication{

    public render(targetSelector: string):Promise<any>{
        let def:Promise<IApplication> = PromiseFactory.create<IApplication>();
        reactRender(this.layout, uiHelper.getElement(targetSelector));
        def.resolve(this);
        return def;
    }
}