import {BaseComponent} from "@app/common";
import * as React from "react";
interface ISiteName{
    name:string;
}
export class SiteName extends BaseComponent<ISiteName>{
    public  render():any{
        return (
            <div className="site__name">
                <div className="navbar nav_title" style={{border: 0}}>
                    <a href="" className="site_title">
                        <i className="fa fa-paw"></i>
                        <span>{this.props.name}</span>
                    </a>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}