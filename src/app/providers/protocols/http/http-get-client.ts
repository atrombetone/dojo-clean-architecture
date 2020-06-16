import { HttpResponse } from '.';

export type HttpGetParams = {
  url: string,
  params?: any,
  headers?: Object,
}

export interface HttpGetClient<R = any> {
  get: (params: HttpGetParams) => Promise<HttpResponse<R>>
}
