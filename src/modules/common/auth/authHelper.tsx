import { IUserProfile } from "./iuserProfile";
import { ICacheManager } from "../cache/icacheManager";
import { IoCNames, AuthConst } from "../enum";

const authHelper={
    getAuthProfile: getAuthProfile
};
export default authHelper;

function getAuthProfile():IUserProfile{
    let cacheManager: ICacheManager = window.ioc.resolve(IoCNames.ICacheManager);
    return cacheManager.get<IUserProfile>(AuthConst.CACHE_USERPROFILE);

}