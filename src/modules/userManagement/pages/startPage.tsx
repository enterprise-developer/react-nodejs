import { BaseComponent, IRouteItem } from "@app/common";
import * as React from "react";
import {Route, Switch} from "react-router-dom";
import routes from "../_share/config/routes";

export default class StartPage extends BaseComponent<any>{
    public internalRender():JSX.Element{
        return (
            <Switch>
                {
                    routes.map((item: IRouteItem, index: number)=>{
                        return <Route exact={item.isExtact||false} key={index} path={item.uri} component={item.component}/>
                    })
                }
            </Switch>
        );
    }
    public rendered(){
    }
}