export interface IMenuItemModel {
  id: number;
  menuName: string;
  menuCode: string;
  route: string;
  parentCode: string;
}

export const defaultMenuItemModel: IMenuItemModel = {
  id: 0,
  menuName: "",
  menuCode: "",
  route: "",
  parentCode: "0",
};

export interface IMenuModel extends IMenuItemModel {
  children: IMenuModel[];
}
