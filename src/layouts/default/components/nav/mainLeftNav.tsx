import * as React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import { BaseComponent, IMenuItem, IoCNames, IAppModule } from "@app/common";

import { IAppSetting } from "@app/common";

export class MainLeftNav extends BaseComponent<IMainLeftNav>{
  private getMenuItems():Array<IMenuItem>{
    let appSetting: IAppSetting = window.ioc.resolve(IoCNames.IAppSetting);
    let modules:Array<IAppModule> = appSetting.getModules();
    return modules.map((item: IAppModule, index: number)=>{
      return {
        cls: item.iconCls,
        text: item.name,
        uri: item.defaultUri
      }
    });
  }
  private onMenuItemClicked(e: any, menuItem: IMenuItem, index: number):void{
    //this.props["history"].push(menuItem.uri);
  }
  public internalRender():JSX.Element{
    let items: Array<IMenuItem> = this.getMenuItems();
      return (
          <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
            <div className="menu_section">
              <h3>General</h3>
              <ul className="nav side-menu">
                {
                  items.map((item: IMenuItem, index: number)=>{
                    return <li key={index}><Link to={item.uri} onClick={(e)=>this.onMenuItemClicked(e, item, index)}>
                                <i className={item.cls}></i>
                                {item.text}
                            </Link></li>
                  })
                }
                
              </ul>
            </div>
        </div>
      );
  }
}
interface IMainLeftNav{}
/**
 * 
 * <li>
                    <a>
                        <i className="fa fa-home"></i>
                        Home 
                        <span className="fa fa-chevron-down"></span>
                      </a>
                  <ul className="nav child_menu">
                    <li><a href="index.html">Dashboard</a></li>
                    <li><a href="index2.html">Dashboard2</a></li>
                    <li><a href="index3.html">Dashboard3</a></li>
                  </ul>
                </li>
*/