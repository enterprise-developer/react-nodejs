import * as React from "react";
import {BaseComponent} from "@app/common";
import {Page} from "@app/ui";
import { IUserService } from "../_share/services/iuserService";
import {LocalIoCNames} from "../_share/enum";
import {UserViewModel, IUserViewModel, IUser} from "./userViewModel";
export default class Users extends BaseComponent<any, IUserViewModel>{
    constructor(pros: any) {
        super(pros, new UserViewModel());
    }
    public rendered():void{
        let userService: IUserService=window.ioc.resolve(LocalIoCNames.IUserService);
        let self=this;
        userService.getUsers().then((users:Array<IUser>)=>{
            self.setState({items: users});
        });
    }
    public internalRender(): JSX.Element{
        let users:Array<IUser>=this.state.items;
        return (
            <Page title={this.i18n.userManagement.users.pageTitle}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>{this.i18n.userManagement.users.firstName}</th>
                        <th>{this.i18n.userManagement.users.lastName}</th>
                        <th>{this.i18n.userManagement.users.userName}</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user: IUser, index: number)=>{
                                return (<tr>
                                    <th scope="row">{index}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.userName}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </Page>
        );
    }
}
