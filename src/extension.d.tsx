interface IIoCContainer{
    resolve(name:string):any;
    import(items:Array<any>):void;
}
interface Window{
    ioc: IIoCContainer;
    $: any;
}

interface Array<T>{
    firstOrDefault:(predicate: (item: T)=>boolean)=>T;
    isEmpty():boolean;
    removeItem(item: any): Array<any>;
    any(callback?: any): boolean;
    toString(saperator?: string): string;
    merge(items: Array<any>, predicate: any): Array<any>;
    pushArray(items: Array<any>): void;
    clone(items: Array<any>): void;
    remove(cb: any): Array<any>;
    where(cb: Function): Array<T>;
    each(cb: Function, index?: number, _this?: Array<T>): Array<T>;
    toArray(cb: Function): Array<any>;
    intersect(arr: Array<any>, hashFunc?: Function): Array<any>;
    toHashtable(predicate:Function):Array<T>;
    clearAll():void;
}

interface StringConstructor {
    format(...params: Array<any>): string;
    isNullOrWhiteSpace(value: string): boolean;
    empty: string;
    firstCharToLower(str: string): string;
    toPascalCase(str: string): string;
    toCamelCase(str: string): string;
}