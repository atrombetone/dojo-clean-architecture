import { GetRequestDetailUseCase } from './get-request-detail-usecase';
import { RequestModel } from '@/core/domain/models/request';

export interface IGetRequestDetailService {
    getRequestDetail(requestNumber: number): Promise<RequestModel>,
}

export class GetRequestDetailUseCaseInteractor implements GetRequestDetailUseCase {

    constructor (private requestService: IGetRequestDetailService) { }
    
    async getRequestDetail(requestNumber: number): Promise<RequestModel> {
        return this.requestService.getRequestDetail(requestNumber);
    }
}