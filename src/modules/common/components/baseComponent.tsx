import * as React from "react";
import {IResourceManager} from "../services/iresourceManager";
import { IoCNames } from "../enum";
export class BaseComponent<TContext, State={}> extends React.Component<TContext>{
    public state:State;
    protected readonly i18n: any;
    constructor(props: any, state?: State){
        super(props);
        this.state=state||{} as State;
        let resourceManager: IResourceManager = window.ioc.resolve(IoCNames.IResourceManager);
        this.i18n=resourceManager.getLocales();
    }
    public render():JSX.Element{
        this.rendering();
        let component:JSX.Element = this.internalRender();
        // need to consider as this method was not but not sure the actual component was rendered to browser
        // this method was moved to componentDidMound
        //this.rendered();
        return component; 
    }
    public rendering(){}
    public internalRender():JSX.Element{
        throw "BaseComponent.render was not implemented";
    }
    public rendered():void{}
    public componentDidMount(){
        this.rendered();
    }
    public componentDidUpdate(prevPros: any){
        for(let pro in prevPros){
            if(!this.props.hasOwnProperty(pro)){continue;}
            let onChangeTriggerName:string = String.format("on{0}Changed", String.toCamelCase(pro)); 
            if(!this.hasOwnProperty(onChangeTriggerName)){continue;}
            this[onChangeTriggerName](this.props[pro], prevPros[pro]);
        }
    }
    public componentWillUnmount():void{
        this.unloaded();
    }
    public unloaded():void{}
}
