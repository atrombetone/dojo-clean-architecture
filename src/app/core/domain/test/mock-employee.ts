import { EmployeeModel } from '@/core/domain/models/employee';
import * as faker from 'faker';

export const mockEmployeeModel = (): EmployeeModel => ({
  employeeId: faker.random.alphaNumeric(10),
  cpf: faker.random.number().toString(),
  name: faker.name.firstName(),
  email: faker.internet.email(),
});

export const mockEmployeeListModel = (): EmployeeModel[] => ([
  mockEmployeeModel(),
  mockEmployeeModel(),
  mockEmployeeModel()
]);
