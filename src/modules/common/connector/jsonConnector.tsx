import { IConnector } from "./iconnector";
import { Promise, PromiseFactory } from "../models/promise";
import {IResponseData} from "../data/iresponseData";

export class JsonConnector implements IConnector{
    // handle error
    public get(uri:string):Promise<any>{
        let def:Promise<any>=PromiseFactory.create();
        fetch(uri)
        .then((response: any)=>{
            return response.json();
        })
        .then((dataInResponse: IResponseData)=>{
            if(dataInResponse.errors && dataInResponse.errors.length>0){
                // need to handle error
                console.log(dataInResponse.errors);
                return;
            }
            if(!dataInResponse.status){
                def.resolve(dataInResponse);
                return;
            }
            def.resolve(dataInResponse.data);
        })
        .catch((errors: any)=>{
            console.log(console.error(errors));
        });
        return def;
    }
}