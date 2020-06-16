import * as faker from 'faker';
import { RequestModel } from '@/core/domain/models/request';
import { mockBenefitListModel } from './mock-benefit';
import { mockRequestState } from '../enum/test';

export const mockRequestDetail = (): RequestModel => ({
    requestNumber: faker.random.number(),
    benefits: mockBenefitListModel(),
    status: mockRequestState(),    
});

