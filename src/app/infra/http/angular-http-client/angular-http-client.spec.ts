import { mockGetRequest } from '@/providers/test/mock-http';
import { TestBed, getTestBed } from "@angular/core/testing";
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularHttpClient } from './angular-http-client';
import { HttpResponse } from '@/providers/protocols/http';
import { HttpResponse as AngularHttpReponse, HttpErrorResponse as AngularHttpErrorResponse } from "@angular/common/http";
import { from } from 'rxjs';

type SutTypes = {
  sut: AngularHttpClient,
  mockedAngularHttp: HttpTestingController,
}

let originalTimeout;

beforeEach(function() {
  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
});

afterEach(function() {
jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});

const makeSut = (): SutTypes => {
  // const mockedAngularHttp = mockAngularHttp();
  // const sut = new AngularHttpClient(mockedAngularHttp);

  TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule,
      ],
    providers: [AngularHttpClient]});

    const injector = getTestBed();
    const sut = injector.get(AngularHttpClient);
    const mockedAngularHttp = injector.get(HttpTestingController);

  return {
    sut,
    mockedAngularHttp
  };
}

describe('AngularHttpClient', () => {
  describe('get', () => {
    it('Deve chamar angularHttp.get com os valores corretos', async (done) => {
      const request = mockGetRequest();
      const { sut, mockedAngularHttp } = makeSut();

    
      const observable$ = from(sut.get(request));

      const subscription = observable$.subscribe({
        next(data) { console.log('############# Data:', data); },
        error(err) { console.error('something wrong occurred: ' + err); },
        complete() { console.log('done'); }
      });
    
      const req = mockedAngularHttp.match(request.url);
      expect(req.length).toBe(1);
      console.log('########## Request: ', req);
      expect(req[0].request.method).toEqual('GET');

      req[0].flush({
        status: 200,
        body: JSON.stringify({color: `blue`})
      });

      done();
    });

    it('Deve retornar a resposta correta do angularHttp.get', async (done) => {

      done();
    });

    it('Deve retornar a resposta correta do angularHttp.get com parametros', async (done) => {
      
      done();
    });

  });

  describe('post', () => {

  });

});
