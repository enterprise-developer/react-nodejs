import { BaseComponent } from "@app/common";
import * as React from "react";
import {BaseIcon, IIconProps} from "./baseIcon";
export class IconEdit extends BaseComponent<IIconProps>{
    public internalRender():JSX.Element{
        return (
            <BaseIcon title={this.props.title} class="fa fa-pencil" onClicked={this.props.onClicked} />
        );
    }
}