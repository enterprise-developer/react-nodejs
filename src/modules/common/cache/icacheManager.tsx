export interface ICacheManager{
    get<TEntity>(key:string): TEntity;
    set(key:string, item: any):void;
}