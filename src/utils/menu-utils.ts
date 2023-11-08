import type { IMenuItemModel, IMenuModel } from "@/model/menu-model";

export class MenuUtils {
  private _menuItemList: IMenuModel[] = [];
  private _parentList: IMenuModel[] = [];

  constructor(menuItemList: IMenuItemModel[]) {
    this._menuItemList = menuItemList.map((item) => ({
      ...item,
      children: [],
    }));
    this._parentList = this.getParentList(this._menuItemList);
  }

  private getParentList(menuItemList: IMenuModel[]): IMenuModel[] {
    return menuItemList.filter((item) => item.parentCode === "0");
  }

  private createChild(menuItem: IMenuModel): IMenuModel[] {
    let childList: IMenuModel[] = this._menuItemList.filter(
      (item) => item.parentCode === menuItem.menuCode
    );
    if (childList.length > 0) {
      childList = childList.map((item) => ({
        ...item,
        children: this.createChild(item),
      }));
    }
    return childList;
  }

  public generateMenu() {
    return this._parentList.map((item) => ({
      ...item,
      children: this.createChild(item),
    }));
  }
}
