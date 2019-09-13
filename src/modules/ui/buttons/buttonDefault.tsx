import * as React from "react";
import { BaseComponent } from "@app/common";
import {IButton} from "../enum";
import {BaseButton} from "./baseButton";
export class ButtonDefault extends BaseComponent<IButton>{
    public internalRender():JSX.Element{
        return (
            <BaseButton {...this.props} class="btn btn-default"/>
        );
    }
}