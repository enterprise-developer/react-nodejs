import { HttpConst } from "../enum";

const helper={
    combine: combine
};
export default helper;
function combine(uri:string, subUri:string):string{
    let slash:string=HttpConst.URI_SEPERATOR;
    if(uri.endsWith(HttpConst.URI_SEPERATOR) || subUri.startsWith(HttpConst.URI_SEPERATOR)){
        slash="";
    }
    return String.format("{0}{1}{2}", uri, slash, subUri);
}