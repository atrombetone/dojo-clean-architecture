import { GetRequestDetailUseCaseInteractor, IGetRequestDetailService } from "./get-request-detail-usecase-interactor";
import * as faker from 'faker';
import { GetRequestDetailServiceSpy } from '@/core/usecases/test/mock-get-request-detail-usecase';

type SutTypes = {
    sut: GetRequestDetailUseCaseInteractor
    serviceSpy: IGetRequestDetailService
  }
  
const makeSut = (): SutTypes => {
    const serviceSpy = new GetRequestDetailServiceSpy();
    const sut = new GetRequestDetailUseCaseInteractor(serviceSpy);

    return {
        sut,
        serviceSpy,
    };
}

describe('GetRequestDetailUseCaseInteractor', () => {

    it('Deve chamar IGetEmployeeService', async (done) => {
        const { sut, serviceSpy } = makeSut();
        const requestNumber = faker.random.number();

        spyOn(serviceSpy, 'getRequestDetail');
    
        await sut.getRequestDetail(requestNumber);
    
        expect(serviceSpy.getRequestDetail).toHaveBeenCalled();
        
        done();
    });
    
    it('Deve retornar um RequestModel quando chamar GetEmployeeService', async (done) => {
        const requestNumber = faker.random.number();
        const { sut } = makeSut();

        let requestDetail = await sut.getRequestDetail(requestNumber);
        
        expect(requestDetail).toBeTruthy();

        done();
    });

});
