import { IApplicationOption } from "../application/enum";
import { IAppModule } from "../enum";

export interface IAppSetting{
    getLanguageCode():string;
    setOption(option:IApplicationOption):void;
    getValueByName(name:string):string;
    getModules():Array<IAppModule>;
}