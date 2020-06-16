import { GetRequestDetailUseCase, IGetRequestDetailService } from '@/core/usecases/request';
import { GetRequestDetailServiceProvider } from '@/providers/usecases/network/request';
import { InMemoryRequestDetailHttpClient  } from '@/infra/test/in-memory-http-client';
import { GetEmployeesUseCaseInteractor } from '@/core/usecases/employee/get-employees-usecase-interactor';
import * as faker from 'faker';
import { Injectable } from '@angular/core';
import { GetRequestDetailUseCaseInteractor } from '@/core/usecases/request/get-request-detail-usecase-interactor';

@Injectable()
export class RequestFactory {
  constructor() {}

  getRequestDetailUseCase(): GetRequestDetailUseCase {
    const httpClient = new InMemoryRequestDetailHttpClient();
    const provider = new GetRequestDetailServiceProvider(faker.internet.url(), httpClient);
    const useCase = new GetRequestDetailUseCaseInteractor(provider);

    return useCase;
  }
}
