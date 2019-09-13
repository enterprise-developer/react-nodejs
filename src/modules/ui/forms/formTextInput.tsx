import * as React from "react";
import { BaseComponent } from "@app/common";
import { IFormInput } from "../enum";
export class FormTextInput extends BaseComponent<IFormInput, IFormInput>{
    constructor(props: any) {
        super(props);
        this.state.value=props.value;
    }
    private onValueChanged(e: any):void{
        e.preventDefault();
        this.setState({value: e.target.value});
    }
    public internalRender():JSX.Element{
        return (
            <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">{this.props.label}</label>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <input type="text" className="form-control col-md-7 col-xs-12" value={this.state.value}  onChange={(e: any)=>{this.onValueChanged(e);}} />
                </div>
            </div>
        );
    }
}