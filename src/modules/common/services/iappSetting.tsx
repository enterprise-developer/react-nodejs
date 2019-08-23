import { IApplicationOption } from "../application/enum";

export interface IAppSetting{
    getLanguageCode():string;
    setOption(option:IApplicationOption):void;
}