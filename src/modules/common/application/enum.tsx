import { ILanguageOption, IAppSettingItem, IAppModule } from "../enum";
export interface ISiteOption{
    name:string;
}
export interface ILayoutOption{
    site?: ISiteOption;
}
export interface IApplicationOption{
    layout:any,
    layoutOption: ILayoutOption;
    language: ILanguageOption;
    settings:Array<IAppSettingItem>;
    modules:Array<IAppModule>;
    locales:Array<string>;
}