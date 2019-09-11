import * as React from "react";
import {BaseComponent} from "@app/common";
import {Page, IconEdit} from "@app/ui";
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
    public onEditUserClicked(item: IUser):void{
        this.navigate(String.format("/userManagement/editUser/{0}", item.id));
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
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user: IUser, index: number)=>{
                                return (<tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.userName}</td>
                                    <td>
                                        <IconEdit title={this.i18n.userManagement.users.edit} onClicked={()=>{this.onEditUserClicked(user)}}></IconEdit>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </Page>
        );
    }
}
