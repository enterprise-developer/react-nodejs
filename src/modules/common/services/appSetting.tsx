import { IAppSetting } from "./iappSetting";
import {AppConst} from "../enum";
import { IApplicationOption } from "../application/enum";

export class AppSetting implements IAppSetting{
    private appOption:IApplicationOption;
    public getLanguageCode():string{
        if(!this.appOption || !this.appOption.language){ return AppConst.DEFAULT_LANGUAGE_CODE;}
        return this.appOption.language.code;
    }

    public setOption(option:IApplicationOption):void{
        this.appOption=option;
    }

}