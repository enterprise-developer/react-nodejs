import { BaseComponent } from "@app/common";
import * as React from "react";
export class FormHorizontal extends BaseComponent<any>{
    public internalRender():JSX.Element{
        return (
            <form data-parsley-validate="" className="form-horizontal form-label-left" noValidate>
                {this.props.children}
            </form>
        );
    }
}