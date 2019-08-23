import { IBuilder } from "../ibuilder";
import { IIoCRegistration } from "./iiocRegistration";
import { IoCLifeCycle } from "../enum";
import { IIoCBuilder } from "./iiocBuilder";
import {SingletonIoCBuilder} from "./builder/singletonIoCBuilder";
import { TrainsientIoCBuilder } from "./builder/trainsientIoCBuilder";

export class IoCBuilderFactory{
    public static create<TEntity>(item: IIoCRegistration):IBuilder<TEntity>{
        let builder:IIoCBuilder<TEntity>;
        switch(item.lifeCycle){
            case IoCLifeCycle.SINGLETON:
                builder =new SingletonIoCBuilder();
                break;
            case IoCLifeCycle.TRAINSIENT:
            default:
                builder=new TrainsientIoCBuilder();
            break;
        }
        builder.setRegistration(item);
        return builder;
    }
}