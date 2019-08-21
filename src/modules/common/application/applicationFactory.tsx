import {IApplication} from "./iapplication";
import {Application} from "./application";
export class ApplicationFactory{
    public static create():IApplication{
        return new Application();
    }
}