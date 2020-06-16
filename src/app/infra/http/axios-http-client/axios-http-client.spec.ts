import { AxiosHttpClient } from '@/infra/http/axios-http-client';
import { mockHttpResponse } from '@/infra/test';
import { mockPostRequest, mockGetRequest } from '@/providers/test'
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: MockAdapter
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = new MockAdapter(axios);
  return {
    sut,
    mockedAxios
  }
};

describe('AxiosHttpClient', () => {
  describe('post', () => {
    it('Deve retornar a resposta correta do axios.post', () => {

    });

    it('Deve retornar a res Should return correct error on axios.post', () => {

    });
  });

  describe('get', () => {
    it('Deve retornar a resposta correta do axios.get', async (done) => {
      const request = mockGetRequest();
      const expectedBody = JSON.stringify({
        name: 'name_value',
        lasName: 'last_value'
      });
      const { sut, mockedAxios } = makeSut();
      mockedAxios.onGet(request.url, { headers: request.headers }).reply(200, expectedBody);

      const response = await sut.get(request);
      
      expect(response).toEqual({ statusCode: 200, body: JSON.parse(expectedBody) });

      done();
    });

    it('Deve retornar o erro correto quando chamar axios.get', async (done) => {
      const request = mockGetRequest();
      const expectedBody = JSON.stringify({message: "Internal Server Error"});
      const { sut, mockedAxios } = makeSut();
      mockedAxios.onGet(request.url, { headers: request.headers }).reply(500, expectedBody);

      const response = await sut.get(request);
      
      expect(response).toEqual({ statusCode: 500, body: JSON.parse(expectedBody) });

      done();

    });  
    
    it('Deve retornar a resposta correta do axios.get com parametros', async (done) => {
      const params = { id: 1 };
      const request = mockGetRequest(params);
      const expectedBody = JSON.stringify({
        name: 'name_value',
        lasName: 'last_value'
      });
      const { sut, mockedAxios } = makeSut();
      mockedAxios.onGet(request.url, { headers: request.headers, params }).reply(200, expectedBody);

      const response = await sut.get(request);
      
      expect(response).toEqual({ statusCode: 200, body: JSON.parse(expectedBody) });

      done();
    });

  });
});
