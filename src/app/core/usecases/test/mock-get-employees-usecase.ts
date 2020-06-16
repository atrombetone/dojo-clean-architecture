import { IGetEmployeesService } from '@/core/usecases/employee';
import { mockEmployeeListModel } from '@/core/domain/test';
import { EmployeeModel } from '@/core/domain/models/employee';

export class GetEmployeesServiceSpy implements IGetEmployeesService {
    async getEmployees(): Promise<EmployeeModel[]> {
      return Promise.resolve(mockEmployeeListModel());
    }

};
