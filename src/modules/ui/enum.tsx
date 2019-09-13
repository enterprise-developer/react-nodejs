export interface IFormInput{
    label:string;
    value:string;
}
export interface IButton{
    text:string;
    class?:string;
    onClicked:()=>void;
}