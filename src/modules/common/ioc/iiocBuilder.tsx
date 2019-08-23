import { IBuilder } from "../ibuilder";
import { IIoCRegistration } from "./iiocRegistration";
export interface IIoCBuilder<TEntity> extends IBuilder<TEntity>{
    setRegistration(item: IIoCRegistration):void;
}