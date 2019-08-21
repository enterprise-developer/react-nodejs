import * as React from "react";
import { BaseComponent } from "@app/common";
interface IStylePros{
    uri:string;
}
export class Style extends BaseComponent<IStylePros>{
    public render():any{
        return (
            <link href={this.props.uri} rel="stylesheet" />
        );
    }
}
