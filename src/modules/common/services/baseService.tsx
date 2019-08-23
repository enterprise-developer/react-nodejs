import uriHelper from "../helpers/uriHelper";
export class BaseService{
    protected resolveUri(uri:string):string{
        return uriHelper.combine(this.baseUri, uri);
    }
}