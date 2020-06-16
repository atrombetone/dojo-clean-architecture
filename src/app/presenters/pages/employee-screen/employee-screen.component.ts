import { Component, OnInit } from '@angular/core';
import { GetEmployeesUseCaseFactory } from '@/main/factories/employee-factory';
import { EmployeeModel } from '@/core/domain/models/employee';
import { GetEmployeesUseCase } from '@/core/usecases/employee';

@Component({
  selector: 'app-employee-screen',
  templateUrl: './employee-screen.component.html',
  styleUrls: ['./employee-screen.component.scss'],
})
export class EmployeeScreenComponent implements OnInit {

  private getEmployeesUseCase: GetEmployeesUseCase;
  employees: Array<EmployeeModel>;

  constructor(getEmployeesUsecaseFactory: GetEmployeesUseCaseFactory) {
    this.getEmployeesUseCase = getEmployeesUsecaseFactory.getEmployeesUseCase();
  }

  ngOnInit() {
    this.employees = [];
  }

  ngAfterViewInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    // Vou trocar p/ observable para deixar reativo
    this.getEmployeesUseCase.get().then(employees => {
      console.log(employees);
      this.employees = [...employees];
    });
  }
}
