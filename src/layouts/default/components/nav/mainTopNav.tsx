import * as React from "react";
import { BaseComponent } from "@app/common";


export class MainTopNav extends BaseComponent<any>{
    public rendered(){
        
    }
    public internalRender(): JSX.Element{
        return (
            <div className="top_nav">
                <div className="nav_menu">
                    <nav>
                        <div className="nav toggle">
                            <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }

}