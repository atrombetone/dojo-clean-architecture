import { GetEmployeesUseCase } from '@/core/usecases/employee';
import { GetEmployeesServiceProvider } from '@/providers/usecases/network/employee';
import { InMemoryEmployeesHttpClient  } from '@/infra/test/in-memory-http-client';
import { GetEmployeesUseCaseInteractor } from '@/core/usecases/employee/get-employees-usecase-interactor';
import * as faker from 'faker';
import { Injectable } from '@angular/core';

@Injectable()
export class GetEmployeesUseCaseFactory {
  constructor() {}

  getEmployeesUseCase(): GetEmployeesUseCase {
    const httpClient = new InMemoryEmployeesHttpClient();
    const provider = new GetEmployeesServiceProvider(faker.internet.url(), httpClient);
    const useCase = new GetEmployeesUseCaseInteractor(provider);

    return useCase;
  }
}
