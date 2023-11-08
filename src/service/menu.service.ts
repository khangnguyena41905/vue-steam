import type { IMenuItemModel } from "@/model/menu-model";
import { BaseService } from "./base/base.service";

export interface IMenuService {
  getMenuList(): Promise<IMenuItemModel[]>;
}
export class MenuService extends BaseService implements IMenuService {
  public constructor() {
    super();
  }

  public async getMenuList(): Promise<IMenuItemModel[]> {
    const res = await this.GET<IMenuItemModel[]>({
      url: "menu",
    });
    return res;
  }
}
