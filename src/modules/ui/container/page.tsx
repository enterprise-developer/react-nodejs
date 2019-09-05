import * as React from "react";
import { BaseComponent } from "@app/common";
export class Page extends BaseComponent<IPage>{
    public internalRender():JSX.Element{
        return (
            <div className="x_panel">
                <div className="x_title">
                    <h2>{this.props.title}</h2>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export interface IPage{
    title:string;
}