import { HttpGetClient, HttpPostClient } from '@/providers/protocols/http';
import { HttpGetParams, HttpResponse, HttpPostParams } from "@/providers/protocols/http";
import { mockEmployeeListModel } from '@/core/domain/test';

export class InMemoryEmployeesHttpClient implements HttpGetClient, HttpPostClient {
    async get(params: HttpGetParams): Promise<HttpResponse> {
      return {
        statusCode: 200,
        body: mockEmployeeListModel(),
      }
    }
    async post(params: HttpPostParams): Promise<HttpResponse> {
      return {
        statusCode: 200,
        body: { message: 'POST Executed with success!'},
      }
    }
};
