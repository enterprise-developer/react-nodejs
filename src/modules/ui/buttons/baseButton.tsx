import * as React from "react";
import { BaseComponent } from "@app/common";
import { IButton } from "../enum";

export class BaseButton extends BaseComponent<IButton>{
    public internalRender():JSX.Element{
        return (
            <button className={this.props.class} type="button" onClick={()=>{this.props.onClicked();}}>{this.props.text}</button>
        );
    }
}