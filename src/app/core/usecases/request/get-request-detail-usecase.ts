import { RequestModel } from '@/core/domain/models/request';

export interface GetRequestDetailUseCase {
    getRequestDetail(requestNumber: number): Promise<RequestModel>;
}