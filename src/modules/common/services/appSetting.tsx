import { IAppSetting } from "./iappSetting";
import {AppConst, IAppSettingItem, IAppModule} from "../enum";
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

    public getValueByName(name:string):string{
        if(!this.appOption){return String.empty;}
        let item: IAppSettingItem = this.appOption.settings.firstOrDefault((item: IAppSettingItem)=>{
            return item.name==name;
        });
        if(!item){
            throw String.format("\'{0}\' setting was not found", name);
        }
        return item.value;
    }
    public getModules():Array<IAppModule>{
        return this.appOption.modules;
    }
}