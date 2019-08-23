export enum IoCLifeCycle{
    NONE=0,
    TRAINSIENT=1,
    SINGLETON=2
}
export enum IoCNames{
    ICacheManager="Common.ICacheManager",
    IResourceManager="Common.IResourceManager",
    IAppSetting="Common.IAppSetting",
    ILocaleService="Common.ILocaleService",
    IConnector="Common.IConnector"
}

export enum AuthConst{
    CACHE_USERPROFILE="AUTH.CACHE_USERPROFILE"
}

export interface ILanguageOption{
    code:string;
    name:string;
}

export enum AppConst{
    DEFAULT_LANGUAGE_CODE="APPLICATION.DEFAULT_LANGUAGE_CODE"
}

export enum HttpConst{
    URI_SEPERATOR="/"

};

export enum ConnectorType{
    JSON="JSON"
}