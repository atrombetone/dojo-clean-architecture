import * as faker from 'faker';
import { BenefitModel } from '@/core/domain/models/request';
import { mockBranchModel } from './mock-branch';
import { mockEmployeeModel } from './mock-employee';

export const mockBenefitModel = (): BenefitModel => ({
  branch: mockBranchModel(),
  employee: mockEmployeeModel(),
  value: faker.random.number(),
});

export const mockBenefitListModel = (): BenefitModel[] => ([
    mockBenefitModel(),
    mockBenefitModel(),
    mockBenefitModel(),
]);