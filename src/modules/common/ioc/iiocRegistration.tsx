import {IoCLifeCycle} from "../enum";
export interface IIoCRegistration{
    name:string;
    instanceOf: any;
    lifeCycle: IoCLifeCycle;
}