// @/store/modules/MyModule.ts
import store from "@/store";
import { Module, Mutation, VuexModule, getModule } from "vuex-module-decorators";

@Module({ dynamic: true, store, name: "TestVuexStore" })
class TestVuexStore extends VuexModule {
  public stateName: string = "BASE NAME";

  @Mutation
  changeStateName(name: string) {
    this.stateName = name;
  }
}

export const testVuexStore = getModule(TestVuexStore)