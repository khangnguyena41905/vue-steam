import router from "@/router";
import { globalStore } from "@/store/global/global-store";
import { Component, Vue } from "vue-facing-decorator";

export default class BaseComponent extends Vue {
  private getRouteByMenuCode(menuCode: string): string {
    const { route } = globalStore.menuList.filter(
      (item) => item.menuCode === menuCode
    )[0];
    return route;
  }

  protected gotoPage(menuCode: string) {
    const route = this.getRouteByMenuCode(menuCode);
    router.push(route);
  }
}
