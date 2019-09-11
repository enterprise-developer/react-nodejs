import Users from "../../pages/users";
import { IRouteItem } from "@app/common";
import {AddNewUser} from "../../pages/addNewUser";
import {EditUser} from "../../pages/editUser";

let routes:Array<IRouteItem>=[
    {uri:"/userManagement/", isExtact:true, component: Users},
    {uri:"/userManagement/users", component: Users},
    {uri:"/userManagement/addNewUser", component: AddNewUser},
    {uri:"/userManagement/editUser/:userId", component: EditUser}
];
export default routes;