interface IParams {
    [key: string]: any;
  }

export interface IApiOptions{
    url:string,
    param?:IParams
    body?: any;
}