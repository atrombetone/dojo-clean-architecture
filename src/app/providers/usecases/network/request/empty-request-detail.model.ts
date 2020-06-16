import { RequestState } from '@/core/domain/enum';
import { RequestModel } from '@/core/domain/models/request';

export const makeEmptyRequestDetail = (): RequestModel => ({
    requestNumber: -1,
    status: RequestState.Inactive,
    benefits: [],
});