import { IConnector } from "./iconnector";
import {ConnectorType} from "../enum";
import {JsonConnector} from "./jsonConnector";

export class ConnectorFactory{
    public static create(type: ConnectorType):IConnector{
        switch(type){
            default:
            case ConnectorType.JSON:
            return new JsonConnector();
        }
    }
}