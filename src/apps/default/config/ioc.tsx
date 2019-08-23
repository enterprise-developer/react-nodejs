import { LocaleService, AppSetting, IIoCRegistration, IoCNames, IoCLifeCycle, MemoryCacheManager, ResourceManager } from "@app/common";

const registrations:Array<IIoCRegistration>=[
    {name: IoCNames.ICacheManager, instanceOf: MemoryCacheManager, lifeCycle: IoCLifeCycle.SINGLETON},
    {name: IoCNames.IResourceManager, instanceOf: ResourceManager, lifeCycle: IoCLifeCycle.SINGLETON},
    {name: IoCNames.IAppSetting, instanceOf: AppSetting, lifeCycle: IoCLifeCycle.SINGLETON},
    {name: IoCNames.ILocaleService, instanceOf: LocaleService, lifeCycle: IoCLifeCycle.TRAINSIENT}
];
export default registrations;