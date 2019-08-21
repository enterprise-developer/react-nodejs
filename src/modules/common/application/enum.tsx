import { ILayout } from "./ilayout";
export interface ISiteOption{
    name:string;
}
export interface ILayoutOption{
    site?: ISiteOption;
}
export interface IApplicationOption{
    layout:any,
    layoutOption: ILayoutOption
}