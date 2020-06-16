import { mockRequestDetail } from '@/core/domain/test/mock-request-detail';
import { RequestModel } from '@/core/domain/models/request';
import { IGetRequestDetailService } from "@/core/usecases/request";

export class GetRequestDetailServiceSpy implements IGetRequestDetailService {
  getRequestDetail(requestNumber: number): Promise<RequestModel> {
      return Promise.resolve(mockRequestDetail());
  }
}
