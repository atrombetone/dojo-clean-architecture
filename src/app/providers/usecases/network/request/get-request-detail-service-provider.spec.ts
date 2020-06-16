import { UnexpectedError } from '@/core/domain/errors';
import { HttpGetClientSpy, asyncExceptionCaptureHelper } from '@/providers/test';
import { HttpStatusCode } from '@/providers/protocols/http';
import * as faker from 'faker';
import { GetRequestDetailServiceProvider } from './get-request-detail-service-provider';
import { RequestModel } from '@/core/domain/models/request';
import { InvalidRequestNumberError } from '@/core/domain/errors/invalid-request-number-error';
import { mockRequestDetail } from '@/core/domain/test/mock-request-detail';
import { makeEmptyRequestDetail } from './empty-request-detail.model';

type SutTypes = {
  sut: GetRequestDetailServiceProvider,
  httpGetClientSpy: HttpGetClientSpy<RequestModel>,
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<RequestModel>();
  const sut = new GetRequestDetailServiceProvider(url, httpGetClientSpy);

  return {
    sut,
    httpGetClientSpy,
  };
}

describe('GetEmployeesServiceProvider', () => {

  it('Deve chamar HttpGetClient com a URL correta', async () => {
    const url = faker.internet.url();
    const requestNumber = faker.random.number();
    const { sut, httpGetClientSpy } = makeSut(url);

    await sut.getRequestDetail(requestNumber);

    expect(httpGetClientSpy.url).toBe(url);
  });

  it('Deve lançar um InvalidRequestNumberError se HttpGetClient retornar 400', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    const requestNumber = faker.random.number();

    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };

    const result = await asyncExceptionCaptureHelper(sut, sut.getRequestDetail, requestNumber);

    expect(result).toEqual(new InvalidRequestNumberError(requestNumber));
  });

  it('Deve lançar um UnexpectedError se HttpGetClient retornar 403', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    const requestNumber = faker.random.number();

    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.forbidden,
    };

    const result = await asyncExceptionCaptureHelper(sut, sut.getRequestDetail, requestNumber);

    expect(result).toEqual(new UnexpectedError());
  });

  it('Deve lançar um UnexpectedError se HttpGetClient retornar 404', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    const requestNumber = faker.random.number();

    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };

    const result = await asyncExceptionCaptureHelper(sut, sut.getRequestDetail, requestNumber);

    expect(result).toEqual(new UnexpectedError());
  });

  it('Deve retornar um RequestDetailModel se HttpGetClient retornar 200', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    const httpResult = mockRequestDetail();
    const requestNumber = faker.random.number();

    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const requestDetail = await sut.getRequestDetail(requestNumber);

    expect(requestDetail).toEqual(httpResult);
  });

  it('Deve retornar um RequestModel vazio se HttpGetClient retornar 204', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    const requestNumber = faker.random.number();

    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.noContent,
    };

    const requestDetail = await sut.getRequestDetail(requestNumber);

    expect(requestDetail).toEqual(makeEmptyRequestDetail());
  });

});
