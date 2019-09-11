import { BaseComponent } from "@app/common";
import * as React from "react";
export interface IIconProps{
    title: string;
    class?:string;
    onClicked:()=>void;
}
export class BaseIcon extends BaseComponent<IIconProps>{
    public internalRender():JSX.Element{
        return (
            <a href="javascript:void(0);" title={this.props.title} onClick={this.props.onClicked}>
                <i className={this.props.class}></i>
            </a>
        );
    }
}