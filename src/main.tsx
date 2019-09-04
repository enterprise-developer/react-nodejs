///<preference path="./extension.d.tsx" />
import * as React from "react";
import {Promise, IoCFactory, IApplication, ApplicationFactory, IApplicationOption, ISiteOption, IoCNames, AuthConst, AppConst} from "@app/common";
import {Layout} from "@app/layouts/default";
//import appOption from "./apps/default/config/appOption";
import iocRegistrations from "./apps/default/config/ioc";
import { ICacheManager } from "./modules/common/cache/icacheManager";
import { IResourceManager } from "@app/common";
import { IAppSetting } from "./modules/common/services/iappSetting";
export class Main{
    readonly ROOT_CONTAINER="root";
    public render():void{
        let option: IApplicationOption = Main.getOption();
        let application:IApplication = ApplicationFactory.create();
        application.rendering();
        application.setLayout(option.layout);
        application.render(this.ROOT_CONTAINER);
        application.rendered();
    }

    public static getOption():IApplicationOption{
        let siteOption:ISiteOption={
            name:"React/ NodeJs"
        };
        return {
            layout:<Layout site={siteOption} />,
            layoutOption:{
                site:siteOption
            },
            language:{
                name:"English",
                code:"en"
            },
            settings:[
                {name: AppConst.LOCALE_ENDPOINT, value:"/src/resources/locales/"}
            ],
            modules:[
                {name: "User management", iconCls: "fa fa-user", defaultUri:"/userManagement"}
            ],
            locales:["layout"]
        };
    }
}
let ioc: IIoCContainer = IoCFactory.createContainer({registrations: iocRegistrations});
window.ioc=ioc;
let appOption: IApplicationOption= Main.getOption();
let appSetting:IAppSetting = window.ioc.resolve(IoCNames.IAppSetting);
appSetting.setOption(appOption);
let resourceManager:IResourceManager = window.ioc.resolve(IoCNames.IResourceManager);
Promise.all([
    resourceManager.loadLocales(appOption.locales)
]).then(()=>{
    initTestData();
    new Main().render();
});
// init user profile
function initTestData(){
    let cacheManager:ICacheManager = window.ioc.resolve(IoCNames.ICacheManager);
    cacheManager.set(AuthConst.CACHE_USERPROFILE,{avatarUri:"http://www.tranthanhtu.vn/avatar.jpg", fullName:"Tu Tran"});
}