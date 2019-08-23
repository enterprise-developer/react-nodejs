import * as React from "react";
import helperFacade, { BaseComponent, IUserProfile } from "@app/common";

export class UserProfile extends BaseComponent<any, IUserProfile>{
    constructor(pros: any){
      super(pros);
    }
    public rendering(){
      this.state = helperFacade.authHelper.getAuthProfile();
    }
    public internalRender():JSX.Element{
        return (
            <div className="profile clearfix">
              <div className="profile_pic">
                <img src={this.state.avatarUri} alt="..." className="img-circle profile_img" />
              </div>
              <div className="profile_info">
                <span>{this.i18n.layout.profile.welcome}</span>
                <h2>{this.state.fullName}</h2>
              </div>
            </div>
        );
    }
}