import { BranchModel } from '@/core/domain/models/request';
import * as faker from 'faker';
import { mockDocumentType } from '@/core/domain/enum/test';

export const mockBranchModel = (): BranchModel => ({
  documentNumber: faker.random.alphaNumeric(),
  documentType: mockDocumentType(),
});

