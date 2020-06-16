import { GetEmployeesUseCaseInteractor, IGetEmployeesService } from "./get-employees-usecase-interactor";
import { GetEmployeesServiceSpy } from '@/core/usecases/test';

type SutTypes = {
  sut: GetEmployeesUseCaseInteractor
  serviceSpy: IGetEmployeesService
}

const makeSut = (): SutTypes => {
  const serviceSpy = new GetEmployeesServiceSpy();
  const sut = new GetEmployeesUseCaseInteractor(serviceSpy);

  return {
    sut,
    serviceSpy,
  };
}

describe('GetEmployeesUseCaseInteractor', () => {
  it('Deve chamar IGetEmployeeService', async () => {
    const { sut, serviceSpy } = makeSut();
    spyOn(serviceSpy, 'getEmployees');

    await sut.get();

    expect(serviceSpy.getEmployees).toHaveBeenCalled();
  });

  it('Deve retornar uma lista de EmployeeModel quando chamar GetEmployeeService', async (done) => {
    const { sut } = makeSut();

    let employeeList = await sut.get();
    expect(employeeList.length).toBeGreaterThan(0);

    done();
  });
});
