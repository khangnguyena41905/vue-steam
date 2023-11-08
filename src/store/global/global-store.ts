// @/store/modules/MyModule.ts
import { IMenuItemModel, defaultMenuItemModel } from "@/model/menu-model";
import { unitOfWork } from "@/service/servive.register";
import store from "@/store";
import {
  Module,
  VuexModule,
  getModule,
  MutationAction,
} from "vuex-module-decorators";

@Module({ dynamic: true, store, name: "GlobalStore" })
class GlobalStore extends VuexModule {
  /* #region MENU LIST  */
  public menuList: IMenuItemModel[] = [{ ...defaultMenuItemModel }];

  @MutationAction
  public async fetchMenuList() {
    const menuList = await unitOfWork.menuService.getMenuList();

    return { menuList };
  }
  /* #endregion */
}

export const globalStore = getModule(GlobalStore);
