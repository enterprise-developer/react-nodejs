import { BaseIoCBuilder } from "./baseIoCBuilder";
export class TrainsientIoCBuilder extends BaseIoCBuilder{
    public getInstance():any{
        return new this.item.instanceOf();
    }
}