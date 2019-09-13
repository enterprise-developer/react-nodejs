import { BaseComponent } from "@app/common";
import * as React from "react";

export class FormFooter extends BaseComponent<any>{
    public internalRender():JSX.Element{
        return (
            <div className="ln_solid form-group">
                <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                    {this.props.children}
                </div>
            </div>
        );
    }
}