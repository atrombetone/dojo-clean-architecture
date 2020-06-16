import { HttpPostParams, HttpResponse, HttpPostClient, HttpGetParams, HttpGetClient } from '@/providers/protocols/http';
import axios, { AxiosResponse, AxiosStatic } from 'axios';
import { jsonParserHelper } from '@/common/parser/json-parser';

export class AxiosHttpClient implements HttpPostClient, HttpGetClient {

  constructor(readonly axiosHttpClient: AxiosStatic = axios) {}

  async post (params: HttpPostParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await this.axiosHttpClient.post(params.url, params.body);
    } catch (error) {
      axiosResponse = error.response;
    }
    return this.adapt(axiosResponse);
  }

  async get (params: HttpGetParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await this.axiosHttpClient.get(params.url, { headers: params.headers, params: params.params });
    } catch (error) {
      axiosResponse = error.response;
    }
    return this.adapt(axiosResponse)
  }

  private adapt (axiosResponse: AxiosResponse): HttpResponse {
    return {
      statusCode: axiosResponse.status,
      body: jsonParserHelper(axiosResponse.data),
    }
  }
}
