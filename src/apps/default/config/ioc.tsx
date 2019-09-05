import { LocaleService, AppSetting, IIoCRegistration, IoCNames, IoCLifeCycle, MemoryCacheManager, ResourceManager } from "@app/common";
import { LocalIoCNames } from "../../../modules/userManagement/_share/enum";
import {UserService} from "../../../modules/userManagement/_share/services/userService";

const registrations:Array<IIoCRegistration>=[
    {name: IoCNames.ICacheManager, instanceOf: MemoryCacheManager, lifeCycle: IoCLifeCycle.SINGLETON},
    {name: IoCNames.IResourceManager, instanceOf: ResourceManager, lifeCycle: IoCLifeCycle.SINGLETON},
    {name: IoCNames.IAppSetting, instanceOf: AppSetting, lifeCycle: IoCLifeCycle.SINGLETON},
    {name: IoCNames.ILocaleService, instanceOf: LocaleService, lifeCycle: IoCLifeCycle.TRAINSIENT},
    // need to refactor and move this to belong to specified module
    {name: LocalIoCNames.IUserService, instanceOf: UserService, lifeCycle: IoCLifeCycle.TRAINSIENT}
];
export default registrations;