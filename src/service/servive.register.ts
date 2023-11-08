import { MenuService, type IMenuService } from "./menu.service";

interface IUnitOfWork {
  menuService: IMenuService;
}
class UnitOfWork implements IUnitOfWork {
  private static unitOfWork: IUnitOfWork | null = null;
  public static getUnitOfWork(): IUnitOfWork {
    return (UnitOfWork.unitOfWork = UnitOfWork.unitOfWork ?? new UnitOfWork());
  }

  private _menuService: IMenuService | null = null;
  public get menuService(): IMenuService {
    return (this._menuService = this._menuService ?? new MenuService());
  }
}
export const unitOfWork: IUnitOfWork = UnitOfWork.getUnitOfWork();
