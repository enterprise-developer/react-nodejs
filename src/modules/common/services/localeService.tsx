import { ILocaleservice } from "./ilocaleservice";
import {BaseService} from "./baseService";
import {IConnector} from "../connector/iconnector";
import {ConnectorFactory} from "../connector/connectorFactory";
import { ConnectorType } from "../enum";
import { Promise } from "../models/promise";
import {AppConst} from "../enum";

export class LocaleService extends BaseService  implements ILocaleservice{
    constructor(){
        super(AppConst.LOCALE_ENDPOINT);
    }
    public getLocale(uri:string):Promise<any>{
        uri=this.resolveUri(uri);
        let connector: IConnector =  ConnectorFactory.create(ConnectorType.JSON);// window.ioc.resolve(IoCNames.IConnector);
        return connector.get(uri);
    }
}