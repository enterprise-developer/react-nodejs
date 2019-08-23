import { IIoCRegistration } from "./iiocRegistration";
import { IBuilder } from "../ibuilder";
import { IoCBuilderFactory } from "./iocBuilderFactory";
import {IIoCContainerOption} from "./iiocContainerOption";
export class IoCFactory{
    public static createContainer(option: IIoCContainerOption):IIoCContainer{
        let iocContainer:IIoCContainer = new IoCContainer();
        iocContainer.import(option.registrations);
        return iocContainer;
    }
}
class IoCContainer implements IIoCContainer{
    private registrations:Array<IIoCRegistration>=[];
    public import(items:Array<IIoCRegistration>):void{
        this.registrations=items;
    }
    public resolve(name:string):any{
        let registration : IIoCRegistration= this.registrations.firstOrDefault((item: IIoCRegistration)=>{
            return item.name==name;
        });

        if(!registration){throw String.format("'{0}' was not fond", name);}

        let builder: IBuilder<any> = IoCBuilderFactory.create<any>(registration);
        return builder.getInstance();
    }
}