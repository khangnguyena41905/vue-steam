import { IApiOptions } from "@/model/api-options";
import axios from "axios";

export class BaseService {
  private baseUrl: string = "";

  protected constructor() {
    this.baseUrl = String(
      process.env.NODE_ENV === "development"
        ? process.env.VUE_APP_BASE_URL_DEV
        : process.env.VUE_APP_BASE_URL_PROD
    );
  }

  protected async GET<T>(options: IApiOptions): Promise<T> {
    try {
      const { data } = await axios.request<T>({
        baseURL: this.baseUrl,
        url: options.url,
        params: options.param,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  protected async POST<T>(options: IApiOptions): Promise<T> {
    try {
      const { data } = await axios.request<T>({
        baseURL: this.baseUrl,
        url: options.url,
        params: options.param,
        data: options.body,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}
