import { HttpGetClient, HttpPostClient } from '@/providers/protocols/http';
import { HttpGetParams, HttpResponse, HttpPostParams } from "@/providers/protocols/http";
import { HttpClient, HttpHeaders, HttpResponse as AngularHttpReponse
  ,  HttpErrorResponse as AngularHttpErrorResponse, 
  HttpParams} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { jsonParserHelper } from '@/common/parser/json-parser';

@Injectable()
export class AngularHttpClient implements HttpGetClient, HttpPostClient {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  async get(params: HttpGetParams): Promise<HttpResponse> {
    const promise = new Promise<HttpResponse>((resolve, reject) => {
      const angularHttpObservable$ = this.httpClient.get<AngularHttpReponse<Object>>(params.url, this.httpOptions);
      angularHttpObservable$.toPromise()
          .then(
              angularHttpResponse => {
                const httpResponse = this.adapt(angularHttpResponse);
                resolve(httpResponse);
            },
            msg => {
              reject(this.adaptError(msg));
            }
          );
    });
    return promise;
  }

  async post(params: HttpPostParams): Promise<HttpResponse> {
    const promise = new Promise<HttpResponse>((resolve, reject) => {
      const angularHttpObservable$ = this.httpClient.post<AngularHttpReponse<Object>>(params.url, params.body, this.httpOptions)
        .toPromise()
          .then(
              angularHttpResponse => {
              const httpResponse = this.adapt(angularHttpResponse);
              resolve(httpResponse);
            },
            msg => {
              reject(this.adaptError(msg));
            }
          );
    });
    return promise;
  }

  private adapt(angularHttpResponse: AngularHttpReponse<Object>): HttpResponse {
    return {
      statusCode: angularHttpResponse.status,
      body: jsonParserHelper(angularHttpResponse.body)
    }
  }

  private adaptError(angularHttpErrorResponse: AngularHttpErrorResponse): HttpResponse {
    return {
      statusCode: angularHttpErrorResponse.status,
      body: angularHttpErrorResponse.message
    }
  }

}
