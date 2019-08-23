import guidHelper from "../helpers/guidHelper";
export class PromiseFactory{
    public static create<TEntity={}>():Promise<TEntity>{
        return new Promise<TEntity>();
    }
}
enum PromiseStatus{
    None=0,
    Success=1,
    Fail=2,
    Subscribe=3
}
export class Promise<TEntity={}>{
    protected id:string;
    private status: PromiseStatus=PromiseStatus.None;
    private queue:Array<string>=[];
    private data: TEntity;
    private successCallback:(arg?:TEntity)=>void;
    private subscribeCallback:(def: Promise<any>)=>void;
    constructor(){
        this.id=guidHelper.create().toString();
    }
    public resolve(arg?: TEntity):Promise<TEntity>{
        this.status=this.status==PromiseStatus.Subscribe?this.status:PromiseStatus.Success;
        this.data=arg;
        this.process();
        return this;
    }
    private process():void{
        if(this.status==PromiseStatus.Success && !!this.successCallback){
            this.successCallback(this.data);
        }

        if(this.status==PromiseStatus.Subscribe && !!this.subscribeCallback){
            this.subscribeCallback(this);
        }
    }
    public subscribe(callback: (def: Promise<any>)=>void):Promise<TEntity>{
        this.status=PromiseStatus.Subscribe;
        this.subscribeCallback=callback;
        this.process();
        return this;
    }
    public static all(subDefs:Array<Promise<any>>):Promise<any>{
        let def:Promise<any>=PromiseFactory.create();
        if(!subDefs || subDefs.length==0){return def.resolve();}
        let self=this;
        subDefs.forEach((subDef: Promise<any>)=>{
            def.queue.push(subDef.id);
            subDef.subscribe((def: Promise<any>)=>{
                def.onSubPromiseCompleted(def);
            })
        });
        return def;
    }
    public then(callback: (arg?:TEntity)=>void):Promise<TEntity>{
        this.status=PromiseStatus.Success;
        this.successCallback=callback;
        this.process();
        return this;
    }
    private onSubPromiseCompleted(def: Promise<any>):void{
        this.queue.removeItem(def.id);
        if(!this.queue.isEmpty()){return;}
        this.resolve();
    }
}