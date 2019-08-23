import { ILanguageOption } from "../enum";
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
}