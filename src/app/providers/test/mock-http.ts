import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode, HttpGetClient, HttpGetParams } from '@/providers/protocols/http';
import * as faker from 'faker';

export const mockPostRequest = (): HttpPostParams => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
});

export const mockGetRequest = (params?: any): HttpGetParams => ({
  url: faker.internet.url(),
  headers: {'Access-Control-Allow-Origin': '*'},
  params: params
});

export class HttpPostClientSpy<R = any> implements HttpPostClient<R> {
  url?: string
  body?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return this.response
  }
};

export class HttpGetClientSpy<R> implements HttpGetClient<R> {
  url: string;
  headers?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  };

  async get (params: HttpGetParams): Promise<HttpResponse> {
    this.url = params.url
    this.headers = params.headers
    return this.response;
  }
};
