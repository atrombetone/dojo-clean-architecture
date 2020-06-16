import { GetEmployeesUseCase } from "./get-employees.usecase";
import { EmployeeModel } from "@/core/domain/models/employee";

export interface IGetEmployeesService {
  getEmployees(): Promise<EmployeeModel[]>,
}

export class GetEmployeesUseCaseInteractor implements GetEmployeesUseCase {

  constructor(private readonly getEmployeesService: IGetEmployeesService) {}

  async get(): Promise<EmployeeModel[]> {
    return this.getEmployeesService.getEmployees();
  }

}
