export class PromiseFactory{
    public static create<TEntity>():Promise<TEntity>{
        return new Promise<TEntity>();
    }
}
enum PromiseStatus{
    None=0,
    Success=1,
    Fail=2
}
export class Promise<TEntity>{
    private status: PromiseStatus=PromiseStatus.None;
    private data: TEntity;
    private successCallback:(arg?:TEntity)=>void;
    public resolve(arg?: TEntity){
        this.status=PromiseStatus.Success;
        this.data=arg;
        this.process();
    }
    private process():void{
        if(this.status==PromiseStatus.Success && !!this.successCallback){
            this.successCallback(this.data);
        }
    }
}