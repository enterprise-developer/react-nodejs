import { IResourceManager } from "./iresourceManager";
import { PromiseFactory, Promise } from "../models/promise";
import { IoCNames } from "../enum";
import { IAppSetting } from "./iappSetting";
import { ILocaleservice } from "./ilocaleservice";

export class ResourceManager implements IResourceManager{
    private locales:any={};
    public getLocales():any{
        return this.locales;
    }

    public loadLocales(locales:Array<string>):Promise<any>{
        let loadRequests:Array<Promise>=[];
        let appSetting: IAppSetting = window.ioc.resolve(IoCNames.IAppSetting);
        let lng:string = appSetting.getLanguageCode();
        let localeService:ILocaleservice = window.ioc.resolve(IoCNames.ILocaleService);
        let self=this;
        locales.forEach((locale:string)=>{
            let def: Promise<any>=PromiseFactory.create();
            loadRequests.push(def);
            let uri:string=String.format("{0}.{1}.json", locale, lng);
            localeService.getLocale(uri).then((data: any)=>{
                self.locales[locale]=data;
                def.resolve({});
            });
        });
        return Promise.all(loadRequests);
    }
}