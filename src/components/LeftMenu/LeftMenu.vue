<template>
  <div id="left-menu">
    <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :items="createMenu"
      @click="handleClick"
    ></a-menu>
  </div>
</template>

<script lang="ts">
import BaseComponent from "@/components/Base/base-component";
import { Watch, Component } from "vue-facing-decorator";
import { ref, VueElement, h } from "vue";
import { AppstoreOutlined } from "@ant-design/icons-vue";
import type { MenuProps, ItemType } from "ant-design-vue";
import { type IMenuItemModel, type IMenuModel } from "@/model/menu-model";
import { MenuUtils } from "@/utils/menu-utils";
import { globalStore } from "@/store/global/global-store";

@Component
export default class LeftMenu extends BaseComponent {
  selectedKeys = ref<string[]>(["1"]);
  openKeys = ref<string[]>(["sub1"]);
  public getItem(
    label: VueElement | string,
    key: string,
    icon?: any,
    children?: ItemType[],
    type?: "group"
  ): ItemType {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as ItemType;
  }
  public handleClick: MenuProps["onClick"] = (e) => {
    // console.log("click", e);
    this.gotoPage(e.key.toString());
  };

  public convertToAntdMenu(menuModelList: IMenuModel[]): ItemType[] {
    const result = menuModelList.map((item) => {
      return item.children.length > 0
        ? this.getItem(
            item.menuName,
            item.menuCode,
            () => h(AppstoreOutlined),
            this.convertToAntdMenu(item.children)
          )
        : this.getItem(item.menuName, item.menuCode, () => h(AppstoreOutlined));
    });
    return result;
  }

  public get createMenu(): ItemType[] {
    const menu: IMenuItemModel[] = globalStore.menuList;
    const menuUtils = new MenuUtils(menu);
    return this.convertToAntdMenu(menuUtils.generateMenu());
  }

  private async created() {
    await globalStore.fetchMenuList();
  }

  @Watch("openKeys")
  propertyWatcher(val: any) {
    console.log("openKeys", val);
  }
}
</script>

<style></style>
