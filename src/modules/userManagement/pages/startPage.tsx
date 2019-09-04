import { BaseComponent } from "@app/common";
import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Users from "./users";

export default class StartPage extends BaseComponent<any>{
    public internalRender():JSX.Element{
        return (
            <Router>
                <Route path="/" component={Users}/>
            </Router>
        );
    }
}