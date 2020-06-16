import * as faker from 'faker';
import { RequestState } from '@/core/domain/enum';

export const mockRequestState = (): RequestState => {
    const randomRequestState: RequestState = RequestState[faker.random.arrayElement(Object.getOwnPropertyNames(RequestState)) as RequestState];
    return randomRequestState;
};