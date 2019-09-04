let helper={
    getElement: getElement,
    appendClass: appendClass
};
export default helper;
function getElement(selector: string):any{
    //temporaly work with id. in the future we can support more than 1 form of selector, such as #id, .class,[pro=val]...
    return window.document.getElementById(selector);
}

function appendClass(selector: string, cls:string):void{
    window.$(selector).addClass(cls);
}