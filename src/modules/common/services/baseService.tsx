import uriHelper from "../helpers/uriHelper";
import { IAppSetting } from "./iappSetting";
import { IoCNames } from "../enum";
export class BaseService{
    protected baseUri:string;
    constructor(settingName:string){
        let appSettingService:IAppSetting=window.ioc.resolve(IoCNames.IAppSetting);
        this.baseUri=appSettingService.getValueByName(settingName);
    }
    protected resolveUri(uri:string):string{
        return uriHelper.combine(this.baseUri, uri);
    }
}