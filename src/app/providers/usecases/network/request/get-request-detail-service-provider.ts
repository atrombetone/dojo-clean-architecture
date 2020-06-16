import { HttpGetClient, HttpStatusCode, HttpResponse, HttpGetParams } from "@/providers/protocols/http";
import { UnexpectedError } from '@/core/domain/errors';
import { IGetRequestDetailService } from '@/core/usecases/request';
import { RequestModel } from '@/core/domain/models/request';
import { InvalidRequestNumberError } from '@/core/domain/errors/invalid-request-number-error';
import { makeEmptyRequestDetail } from './empty-request-detail.model';

type ActionParam = {
  httpResponse?: HttpResponse,
  requestNumber?: number,
};

type RequestDetailParam = {
  requestNumber: number
};

const statusCodeResponseActionMap = new Map<number, Function>()
  .set(HttpStatusCode.ok, ({ httpResponse }: ActionParam) => httpResponse.body)
  .set(HttpStatusCode.noContent, ({ }: ActionParam) => makeEmptyRequestDetail())
  .set(HttpStatusCode.badRequest, ({ requestNumber }: ActionParam) => { throw new InvalidRequestNumberError(requestNumber)});

export class GetRequestDetailServiceProvider implements IGetRequestDetailService {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<RequestModel[]>,
  ) {}
  
  async getRequestDetail(requestNumber: number): Promise<RequestModel> {
    const httpGetParams: HttpGetParams = this.makeHttpGetParams({requestNumber});
    
    const httpResponse = await this.httpGetClient.get(httpGetParams);

    const functionToBeExecuted = this.getFunctionBasedOnResponseStatusCode(httpResponse.statusCode);

    if (!functionToBeExecuted) {
      throw new UnexpectedError();
    }

    return functionToBeExecuted({ httpResponse, requestNumber });
  }

  private makeHttpGetParams(requestDetailParam: RequestDetailParam): HttpGetParams {
    return {
      url: this.url,
      params: requestDetailParam,
    };
  }

  private getFunctionBasedOnResponseStatusCode(statusCode: number) {
    return statusCodeResponseActionMap.get(statusCode)
  }

}
