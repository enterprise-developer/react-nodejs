import * as React from "react";
import {IApplication, ApplicationFactory, IApplicationOption} from "@app/common";
import {Layout} from "@app/layouts/default";
export class Main{
    readonly ROOT_CONTAINER="root";
    public render():void{
        let option: IApplicationOption = this.getOption();
        let application:IApplication = ApplicationFactory.create();
        application.setLayout(option.layout);
        application.render(this.ROOT_CONTAINER);
    }

    private getOption():IApplicationOption{
        return {
            layout: <Layout />
        };
    }
}
new Main().render();
