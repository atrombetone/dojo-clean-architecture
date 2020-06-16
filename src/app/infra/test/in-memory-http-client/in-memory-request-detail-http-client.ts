import { HttpGetClient, HttpPostClient } from '@/providers/protocols/http';
import { HttpGetParams, HttpResponse, HttpPostParams } from "@/providers/protocols/http";
import { mockEmployeeListModel, mockBenefitListModel } from '@/core/domain/test';
import { RequestModel } from '@/core/domain/models/request';
import { mockRequestState } from '@/core/domain/enum/test';

const requestDetailList: Array<RequestModel> = [
  { requestNumber: 1, status: mockRequestState(), benefits: mockBenefitListModel() },
  { requestNumber: 2, status: mockRequestState(), benefits: mockBenefitListModel() },
  { requestNumber: 3, status: mockRequestState(), benefits: mockBenefitListModel() },
  { requestNumber: 4, status: mockRequestState(), benefits: mockBenefitListModel() },
  { requestNumber: 5, status: mockRequestState(), benefits: mockBenefitListModel() }
]

export class InMemoryRequestDetailHttpClient implements HttpGetClient {
    async get(params: HttpGetParams): Promise<HttpResponse> {
      const { requestNumber } = params.params;
      const requestDetail: RequestModel = requestDetailList.find(requestDetail => requestDetail.requestNumber === requestNumber);
      console.log(requestDetail);
      if (requestDetail) {
        return {
          statusCode: 200,
          body: requestDetail,
        }
      }

      return {
        statusCode: 404
      }
    }
};
