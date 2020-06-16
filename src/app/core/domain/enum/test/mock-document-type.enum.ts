import * as faker from 'faker';
import { DocumentType } from '@/core/domain/enum';

export const mockDocumentType = (): DocumentType => {
    const randomDocumentType: DocumentType = DocumentType[faker.random.arrayElement(Object.getOwnPropertyNames(DocumentType))] as DocumentType;
    return randomDocumentType;
};