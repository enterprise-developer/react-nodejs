import { BaseComponent } from "@app/common";
import {ButtonDefault, FormHorizontal, FormTextInput, FormFooter,ButtonPrimary} from "@app/ui";
import * as React from "react";
import { IUser } from "../_share/enum";
export class EditUser extends BaseComponent<IUser, IUser>{
    /**
     *
     */
    constructor(props) {
        super(
            props
        );
        this.state={
            firstName:"",
            lastName:"",
            userName:""
        } as IUser;
    }
    private onCancelClicked():void{
        console.log("onCancelClicked");
    }
    private onSaveClicked():void{
        console.log("onSaveClicked");
    }
    public internalRender():JSX.Element{
        return (
            <FormHorizontal>
                <FormTextInput 
                    label={this.i18n.userManagement.editUser.firstName} 
                    value={this.state.firstName} />
                <FormTextInput 
                    label={this.i18n.userManagement.editUser.lastName} 
                    value={this.state.lastName} />
                <FormTextInput 
                    label={this.i18n.userManagement.editUser.userName} 
                    value={this.state.userName} />
                <FormFooter>
                    <ButtonDefault 
                        text={this.i18n.common.form.cancel}  
                        onClicked={()=>{this.onCancelClicked()}}
                        />
                    <ButtonPrimary 
                        text={this.i18n.common.form.save}  
                        onClicked={()=>{this.onSaveClicked()}}
                        />
                </FormFooter>
            </FormHorizontal>
        );
    }
}