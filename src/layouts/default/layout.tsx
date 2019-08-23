import * as React from "react";
import {ILayoutOption} from "@app/common";
import {Style} from "@app/ui";
import {SiteName}  from "./components/siteName";
import {UserProfile} from "./components/user/profile";
import { BaseLayout } from "@app/common";
export class Layout extends BaseLayout<ILayoutOption>{
    public render():any{
        return (
            <div>
                <Style uri="/src/layouts/default/vendors/bootstrap/dist/css/bootstrap.min.css"/>
                <Style uri="/src/layouts/default/vendors/font-awesome/css/font-awesome.min.css"/>
                <Style uri="/src/layouts/default/vendors/nprogress/nprogress.css"/>
                <Style uri="/src/layouts/default/vendors/iCheck/skins/flat/green.css"/>
                <Style uri="/src/layouts/default/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css"/>
                <Style uri="/src/layouts/default/css/custom.min.css"/>
                <div className="container body">
                    <div className="main_container">
                        <div className="col-md-3 left_col">
                            <div className="left_col scroll-view">
                                <SiteName name={this.props.site.name} />
                                <UserProfile />
                            </div>
                        </div>
                        <div className="top_nav">
                            top nav
                        </div>
                        <div className="right_col" role="main"></div>
                            right column
                        <footer>
                        <div className="pull-right">
                            Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
                        </div>
                        <div className="clearfix"></div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}