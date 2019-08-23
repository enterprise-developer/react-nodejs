export interface IResourceManager{
    getLocales():any;
    loadLocales(locales:Array<string>):Promise<any>;
}