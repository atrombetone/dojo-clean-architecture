import { EmployeeModel } from "@/core/domain/models/employee";

export interface GetEmployeesUseCase {
  get(): Promise<EmployeeModel[]>;
}
