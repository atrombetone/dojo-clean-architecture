import { EmployeeModel } from '@/core/domain/models/employee';
import { mockEmployeeListModel } from '@/core/domain/test';
import { UnexpectedError } from '@/core/domain/errors';
import { GetEmployeesServiceProvider } from './get-employees-service-provider';
import { HttpGetClientSpy, asyncExceptionCaptureHelper } from '@/providers/test';
import { HttpStatusCode } from '@/providers/protocols/http';
import * as faker from 'faker';

type SutTypes = {
  sut: GetEmployeesServiceProvider
  httpGetClientSpy: HttpGetClientSpy<EmployeeModel[]>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<EmployeeModel[]>();
  const sut = new GetEmployeesServiceProvider(url, httpGetClientSpy);

  return {
    sut,
    httpGetClientSpy,
  };
}

describe('GetEmployeesServiceProvider', () => {

  it('Deve chamar HttpGetClient com a URL correta', async () => {
    const url = faker.internet.url();
    const { sut, httpGetClientSpy } = makeSut(url);

    await sut.getEmployees();

    expect(httpGetClientSpy.url).toBe(url);
  });

  it('Deve lançar um UnexpectedError se HttpGetClient retornar 403', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.forbidden,
    };

    const result = await asyncExceptionCaptureHelper(sut, sut.getEmployees);

    expect(result).toEqual(new UnexpectedError);
  });

  it('Deve lançar um UnexpectedError se HttpGetClient retornar 404', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    httpGetClientSpy.response = {
        statusCode: HttpStatusCode.notFound,
    };

    const result = await asyncExceptionCaptureHelper(sut, sut.getEmployees);

    expect(result).toEqual(new UnexpectedError());
  });

  it('Deve retornar uma lista de EmployeeModels se HttpGetClient retornar 200', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    const httpResult = mockEmployeeListModel();
    httpGetClientSpy.response = {
        statusCode: HttpStatusCode.ok,
        body: httpResult,
    };

    const employeeList = await sut.getEmployees();

    expect(employeeList).toEqual(httpResult);
  });

  it('Deve retornar uma lista vazia de EmployeeModels se HttpGetClient retornar 204', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    httpGetClientSpy.response = {
        statusCode: HttpStatusCode.noContent,
    };

    const employeeList = await sut.getEmployees();

    expect(employeeList).toEqual([]);
  });

});
