import * as React from "react";
import {IResourceManager} from "../services/iresourceManager";
import { IoCNames } from "../enum";
export class BaseComponent<TContext, State={}> extends React.Component<TContext>{
    public state:State;
    protected readonly i18n: any;
    constructor(props: any){
        super(props);
        let resourceManager: IResourceManager = window.ioc.resolve(IoCNames.IResourceManager);
        this.i18n=resourceManager.getLocales();
    }
    public render():JSX.Element{
        this.rendering();
        let component:JSX.Element = this.internalRender();
        // need to consider as this method was not but not sure the actual component was rendered to browser
        this.rendered();
        return component; 
    }
    public rendering(){}
    public internalRender():JSX.Element{
        throw "BaseComponent.render was not implemented";
    }
    public rendered():void{}
}
