import { ConnectorType, IConnector, ConnectorFactory, BaseService, Promise } from "@app/common";
import { IUserService } from "./iuserService";
import {Const} from "../enum";
export class UserService extends BaseService implements IUserService{
    constructor() {
        super(Const.API_ENDPOINT);
    }
    public getUsers():Promise<any>{
        let uri:string=this.resolveUri("users");
        let connector: IConnector = ConnectorFactory.create(ConnectorType.JSON);
        return connector.get(uri);
    }
}