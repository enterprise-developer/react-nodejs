import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import helperFacade, { ILayoutOption, IMenuItem, IAppSetting, IoCNames, IAppModule } from "@app/common";
import {Style} from "@app/ui";
import {SiteName}  from "./components/siteName";
import {UserProfile} from "./components/user/profile";
import {MainLeftNav} from "./components/nav/mainLeftNav";
import {MainTopNav} from "./components/nav/mainTopNav";
import { BaseLayout } from "@app/common";
export class Layout extends BaseLayout<ILayoutOption>{
    constructor(props: any) {
        super(props);
    }
    public rendering(){
        helperFacade.uiHelper.appendClass("body","nav-md");
    }
    private getMenuItems():Array<IMenuItem>{
        let appSetting: IAppSetting = window.ioc.resolve(IoCNames.IAppSetting);
        let modules:Array<IAppModule> = appSetting.getModules();
        return modules.map((item: IAppModule, index: number)=>{
          return {
            cls: item.iconCls,
            text: item.name,
            uri: item.defaultUri,
            component: (React.lazy(() =>import("../../modules/"+item.key+"/pages/startPage")))
          }
        });
      }
    public internalRender():any{
        let items: Array<IMenuItem> = this.getMenuItems();
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
                        <Router>
                            <div className="col-md-3 left_col">
                                <div className="left_col scroll-view">
                                    <SiteName name={this.props.site.name} />
                                    <UserProfile />
                                    <br/>
                                    <MainLeftNav />
                                </div>
                            </div>
                            <MainTopNav />
                            <div className="right_col" role="main">
                                <Route exact path="/" component={Overview} />
                                <React.Suspense fallback={<div>Loading ...</div>}>
                                    {
                                        items.map((item: IMenuItem, index: number)=>{
                                            return <Route key={index} path={item.uri} component={item.component} />
                                        })
                                    }
                                </React.Suspense>
                            </div>
                        </Router>
                        <footer>
                            <div className="pull-right" dangerouslySetInnerHTML={{__html: this.i18n.layout.footer}}></div>
                            <div className="clearfix"></div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}
class Overview extends React.Component{
    public render():JSX.Element{
        return (<div>Overview component</div>);
    }
}
class UserManagement extends React.Component{
    public render():JSX.Element{
        return (
            <div>Just for testing</div>
        );
    }
}